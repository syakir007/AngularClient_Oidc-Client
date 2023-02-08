import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role.enum';
import { AuthenticationsService } from '../oidc/services/authentication.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  constructor(
    private authservice: AuthenticationsService,
    
  ) { }

  ngOnInit(): void {
  }

  checkRole(): boolean {
    const user = this.authservice._user;
    return user !== null && user.profile.role.indexOf(Role.Staff) !== -1;
  }

}
