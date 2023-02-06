import { Profile } from "./profile.model";

export class Response{
    public id_token: string;
    public session_state: string;
    public access_token: string;
    public refresh_token: string;
    public token_type: string;
    public scope: string[];
    public profile: Profile;
    public exp: string;

    constructor (
        id_token: string,
        session_state: string,
        access_token: string,
        refresh_token: string,
        token_type: string,
        scope: string[],
        profile: string,
        exp: string
    ){
        this.id_token = id_token;
        this.session_state = session_state;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.token_type = token_type;
        this.scope = scope;
        this.profile = JSON.parse(profile);
        this.exp = exp;
    }
}