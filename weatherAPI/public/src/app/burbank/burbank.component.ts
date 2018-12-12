import { HttpService } from "../http.service"
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  zipCode = "91502";
  countryCode = "us";
  weather: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this.getBurbankWeather();
  }

  getBurbankWeather() {
    let observable = this._httpService.getWeather(this.zipCode, this.countryCode);
    observable.subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }

}
