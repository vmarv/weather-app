import {Component, Input} from '@angular/core';
import {WeatherDatas} from "../../../../models/interfaces/weather-datas";
import {faDroplet, faTemperatureHigh, faTemperatureLow, faWind} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperaturyIcon: IconDefinition = faTemperatureLow;
  maxTemperaturyIcon: IconDefinition = faTemperatureHigh;
  humidityIcon: IconDefinition = faDroplet;
  windIcon: IconDefinition = faWind;

}
