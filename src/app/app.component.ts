import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { EventService } from './event.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})

export class AppComponent implements OnInit {
  title = "THRESHOLD'S FUTURE COMPANION APP!";
    
  constructor(private eventService: EventService) {}

  ngOnInit() {
  }

  submitForm(name: string, location: string, link: string, date: string, description: string, imageUrl: string, categoryCause: string, categoryAction: string, price: string, countThreshold: string) {
    var countThresholdNum = +countThreshold;
    var countActualNum = 1;
    var newEvent: Event = new Event(name, location, link, date, description, imageUrl, categoryCause, categoryAction, price, countThresholdNum, countActualNum);
    console.log(newEvent);
  }
}
