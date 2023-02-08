import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationsService } from './authentication.service';

@Injectable({
    providedIn: 'root',
})

export class weatherApi {
    
    constructor(
        private _authservice: AuthenticationsService,
        private http: HttpClient
    ){}
    
    getWeatherData(){
        return this.http.get(environment.apiUrl + '/WeatherForecast');
    }

}