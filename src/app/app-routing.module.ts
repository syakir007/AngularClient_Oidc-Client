import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogoutCallbackComponent } from './logout-callback/logout-callback.component';
import { AuthGuard } from './oidc/guards';
import { StaffPageComponent } from './staff-page/staff-page.component';


const routes: Routes = [
 {path: '', component: LandingPageComponent},
 {path: 'home', component: HomeComponentComponent, canActivate:[AuthGuard]},
 {path: 'login-callback', component: AuthCallbackComponent},
 {path: 'logout-callback', component: LogoutCallbackComponent},
 {path: 'staff-page', component: StaffPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
