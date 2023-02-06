import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../oidc/services';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public _authservice: AuthenticationsService
  ) { }

  ngOnInit(): void {
  }

  login()
  {
    let response = this._authservice.startAuthentication();
  }

}
