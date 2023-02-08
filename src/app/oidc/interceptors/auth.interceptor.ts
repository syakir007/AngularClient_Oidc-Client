import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, from, Observable, switchMap, tap, throwError } from "rxjs";
import { AuthenticationsService } from "../services";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private readonly _authService: AuthenticationsService,
        private readonly _router: Router
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

        var token = this._authService._user.access_token;
        // token invalid
        if (token && this._authService.tokenExpired(token)) {
          console.log("token invalid")
          return next.handle(request).pipe(
            catchError(error =>{
              if(error.status === 401){
                console.log('token has expired')
                return from(this._authService.refreshToken()).pipe(
                  switchMap(token => {
                    sessionStorage.removeItem('token');
                    sessionStorage.setItem('token', token);
                    request = request.clone({
                      setHeaders:{
                        Authorization: `Bearer ${token}`
                      }
                    });
                    return next.handle(request);
                  })
                )
              }
              else{
                return throwError(error);
              }
            })
          );
        }
        //token valid
        else{
          console.log("token valid")
          request = request.clone({
            setHeaders:{
              Authorization: `Bearer ${token}`
            }
          });
        }
        return next.handle(request)
        }
}