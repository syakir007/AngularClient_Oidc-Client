import { Component, OnInit } from '@angular/core';
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
}
