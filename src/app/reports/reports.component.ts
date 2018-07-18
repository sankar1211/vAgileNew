import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  chart = []; // This will hold our chart info
  constructor(private _weather: WeatherService) { }

  ngOnInit() { this._weather.dailyForecast()
    .subscribe(res => {
      console.log(res)
    })

  }

}
