import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../oidc/services';

@Component({
  selector: 'app-logout-callback',
  templateUrl: './logout-callback.component.html',
  styleUrls: ['./logout-callback.component.css']
})
export class LogoutCallbackComponent implements OnInit {

  constructor(
    private _authservice: AuthenticationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._authservice.completeLogout();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }
  
}
