import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AuthenticationsService } from './oidc/services';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogoutCallbackComponent } from './logout-callback/logout-callback.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './oidc/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AuthCallbackComponent,
    LandingPageComponent,
    LogoutCallbackComponent,
    StaffPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
