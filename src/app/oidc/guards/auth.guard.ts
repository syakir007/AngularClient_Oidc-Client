import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationsService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly _authService: AuthenticationsService
  ){}

   async canActivate(){
    if (this._authService.isLoggedIn()){
      console.log('user logged in');
      return true;
    }
    console.log('user not logged in');

    await this._authService.startAuthentication();
    return false
  }
    
}
