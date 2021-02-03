import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';
import { WeatherService } from './weather-service/weather.service';
import { WeatherInfo } from './model/weatherInfo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo-pwa';
  key: string;
  seconds: number = 5;
  message;
  weather: WeatherInfo;

  constructor(private messagingService: MessagingService,
    private weatherService: WeatherService) { }

  sendNotification(){
    if(this.key != null){
      this.messagingService.makeNotificationFromServer(this.key);
    }
    
    this.seconds = 5;

    let intervalId = setInterval(() => {
      this.seconds = this.seconds - 1;
      if(this.seconds === 0) clearInterval(intervalId)
    }, 1000)

  }

  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
    this.weatherService.getWeather().subscribe(
      data => {
        this.weather = (new WeatherInfo(
          data['name'],
          data['weather']['0']['main'],
          data['main']['feels_like']
        ));
      }
    )

    this.messagingService.key$.subscribe(data =>  {
      this.key = data;
    });

  }
}