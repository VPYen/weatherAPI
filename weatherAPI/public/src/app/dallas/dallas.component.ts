import { HttpService } from "../http.service"
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  zipCode = "75201";
  countryCode = "us";
  weather: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this.getDallasWeather();
  }

  getDallasWeather() {
    let observable = this._httpService.getWeather(this.zipCode, this.countryCode);
    observable.subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }

}
