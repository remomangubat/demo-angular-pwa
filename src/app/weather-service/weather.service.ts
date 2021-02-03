import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private URL: string = 'https://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&appid=60919dc58255e2bc582d63d7e5db7ac3';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any>{
      return this.http.get<any>(this.URL);
  }

}
