import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getWeather(zipCode: String, countryCode: String) {
    console.log(zipCode + " " + countryCode);
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=Imperial&appid=`);
  }
}
