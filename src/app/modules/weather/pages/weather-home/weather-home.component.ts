import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {WeatherDatas} from "../../../../models/interfaces/weather-datas";
import {Subject, takeUntil} from "rxjs";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  initialCityName: string = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon: IconDefinition = faMagnifyingGlass;

  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit() {
    this.getWeatherDatas(this.initialCityName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWatherDatas(cityName).pipe(takeUntil(this.destroy$)).subscribe({
      next: response => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

}
