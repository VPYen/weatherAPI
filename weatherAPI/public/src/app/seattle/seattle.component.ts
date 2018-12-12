import { HttpService } from "../http.service"
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  zipCode = "98101";
  countryCode = "us";
  weather: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this.getSeattleWeather();
  }

  getSeattleWeather() {
    let observable = this._httpService.getWeather(this.zipCode, this.countryCode);
    observable.subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }


}
