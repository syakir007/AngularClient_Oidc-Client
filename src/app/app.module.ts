import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AuthenticationsService } from './oidc/services';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogoutCallbackComponent } from './logout-callback/logout-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AuthCallbackComponent,
    LandingPageComponent,
    LogoutCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
