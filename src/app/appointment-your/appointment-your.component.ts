import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventService } from '../event.service';
@Component({
  selector: 'app-appointment-your',
  templateUrl: './appointment-your.component.html',
  styleUrls: ['./appointment-your.component.scss']
})
export class AppointmentYourComponent implements OnInit {calendarOptions: Options;
  displayEvent: {event:{start: "null",end: "null", title: "null"}};
  events = [];
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected eventService: EventService) { }

  ngOnInit() {
    this.calendarOptions = {
      editable: false,
      eventLimit: false,
      eventBackgroundColor: 'green',
      eventTextColor: 'white',
      header: {
        left: 'prev,next, today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth',

      },
      eventRender: (eventObj, $el) => {
      $el.popover({
        title: eventObj.title,
        content: eventObj.description,
        trigger: 'hover',
        placement: 'top',
        container: 'body'
      });
    },
      eventSources: [
    { events: [],
      color: 'yellow',    // an option!
      backgroundColor: 'yellow',
      textColor: 'yellow'  // an option!
    }
  ]
    };
  }
  push_event(data){
    	this.events.push({title:data,start:'2018-12-05',end: '2018-12-07'});
  }

  loadevents() {
    this.eventService.getEvents().subscribe(data => {
    	console.log(data);
    	data.push({title:'pushed this one',start:'2018-12-02',end: '2018-12-04'});
      this.events = data;
    });
  } 
  loadevents2() {
    this.events = [{title:'Loaded this one',start:'2018-12-02',end: '2018-12-04'}];
  }
  loadevents3() {
  	var data; 
    console.log(data)
    var data1 = this.events;
    data = [{title:'Loaded this one for time',start:'2018-12-02T06:00:00',end: '2018-12-02T16:00:00', allday: false,color: 'yellow',description: 'description for All Day Event',}];
    data.push({title:'Pushed this one',start:'2018-12-05',end: '2018-12-07'});
    console.log(data)
    this.events = data;
  }
  loadevents4() {
    var data1 = Array.from(this.events);
    data1.push({title:'Pushed this one 2',start:'2018-12-09',end: '2018-12-12'});
    this.events = data1;
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

}
