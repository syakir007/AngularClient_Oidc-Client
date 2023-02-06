import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthenticationsService } from "../services";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private readonly _authService: AuthenticationsService,
        private readonly _router: Router
    ){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        if (this._authService.isLoggedIn()){
            let newRequest = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this._authService.getAccesstToken()}`,
                },
            });
            return next.handle(newRequest);
        }
        return next.handle(req);
    }
}