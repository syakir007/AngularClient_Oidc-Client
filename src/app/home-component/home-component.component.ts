import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/role.enum';
import { AuthenticationsService, weatherApi } from '../oidc/services';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(
    private _authservice: AuthenticationsService,
    private _weatherservice: weatherApi,
  ) { }

  ngOnInit(): void {
  }

  api(){
    this._weatherservice.getWeatherData().subscribe(
      response => console.log(response)
    )
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

  checkRole(): boolean {
    const user = this._authservice._user;
    return user !== null && user.profile.role.indexOf(Role.Staff) !== -1;
  }
}
