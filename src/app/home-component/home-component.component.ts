import { Component, OnInit } from '@angular/core';
import { Response } from '../model/response.model';
import { AuthenticationsService } from '../oidc/services';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(
    private _authservice: AuthenticationsService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this._authservice.startLogout();
  }

  getresponse(){
    const response = this._authservice.getResponse();
    if(response) {
      console.log(response.profile.role);
    }
    else
      console.log('no response');
  }
}
