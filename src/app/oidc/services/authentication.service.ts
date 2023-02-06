import { Injectable } from "@angular/core";
import { User, UserManager, UserManagerSettings, WebStorageStateStore } from "oidc-client";

@Injectable()
export class AuthenticationsService {
    isUserDefined = false;
    _user: any;
    private _userManager: UserManager;

    constructor(){
        this._userManager = new UserManager(getOidcSetting());
    }

    isLoggedIn(){
        return this._user != null && !this._user.expired;
    }

    getAccesstToken(){
        return this._user ? this._user.access_token : '';
    }

    getClaim() {
        return this._user?.profile;
    }

    startAuthentication(): Promise<void> {
        return this._userManager.signinRedirect();
    }

    completeAuthentication(){
        return this._userManager.signinRedirectCallback().then((user) => {
            this._user = user;
            this.isUserDefined = true;
        })
    }

    startLogout(): Promise<void> {
        return this._userManager.signoutRedirect();
    }

    completeLogout() {
        this._user = null;
        return this._userManager.signinRedirectCallback();
    }

    silentSignInAuthentication() {
        return this._userManager.signinSilentCallback();
    }

}

export function getOidcSetting(): UserManagerSettings {

    return {
        authority: 'https://localhost:5001',
        client_id: 'AngularOidcClient',
        response_type: 'code',
        scope: 'openid profile verification api1 api2 role offline_access',
        redirect_uri: 'http://localhost:4200/login-callback',
        post_logout_redirect_uri: 'http://localhost:4200/logout-callback',
        automaticSilentRenew: true,
        silent_redirect_uri: 'http://localhost:4200/silent-callback',
        userStore: new WebStorageStateStore({
            store: window.sessionStorage,
        })
    };
}
