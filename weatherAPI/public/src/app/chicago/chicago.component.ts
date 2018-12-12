import { HttpService } from "../http.service"
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  zipCode = "60684";
  countryCode = "us";
  weather: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this.getChicagoWeather();
  }

  getChicagoWeather() {
    let observable = this._httpService.getWeather(this.zipCode, this.countryCode);
    observable.subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }

}
