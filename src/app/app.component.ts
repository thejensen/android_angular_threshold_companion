import { Component } from '@angular/core';
import { Event } from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THRESHOLD';

  submitForm(name: string, location: string, link: string, date: string, description: string, imageUrl: string, categoryCause: string, categoryAction: string, price: string, countThreshold: string) {
    var countThresholdNum = +countThreshold;
    var countActualNum = 1;
    var newEvent: Event = new Event(name, location, link, date, description, imageUrl, categoryCause, categoryAction, price, countThresholdNum, countActualNum);
    console.log(newEvent);
  }
}
