import { HttpService } from "../http.service"
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  zipCode = "";
  countryCode = "us";
  weather = null;

  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this.weather= null;
  }

  newWeather() {
    this.weather = null;
  }

  getMyWeather() {
    let observable = this._httpService.getWeather(this.zipCode, this.countryCode);
    observable.subscribe(data => {
      this.weather = data;
      this.zipCode = "";
      this.countryCode = "us";
    });
  }
}
