import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../oidc/services';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private _authservice: AuthenticationsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._authservice.completeAuthentication();
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 1000);
  }

}
