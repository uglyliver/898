import { Component, EventEmitter,ChangeDetectorRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {envin} from '../data.service'; //envin + '/



import {DataService} from '../data.service';
import { Http } from '@angular/http';


export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
  isholiday?:boolean;
  holidayname?:string;
}
@Component({
  selector: 'app-holidayhr',
  templateUrl: './holidayhr.component.html',
  styleUrls: ['./holidayhr.component.scss']
})
export class HolidayhrComponent implements OnInit, OnChanges {

  selbool: boolean =false;
  firstmonth: any[]=[];
  inputdate: any;inputdate2: any;
  currentDate = moment();
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  weeks: CalendarDate[][] = [];
  sortedDates: CalendarDate[] = [];

  @Input() selectedDates: CalendarDate[] = [];
  // @Output() onSelectDate = new EventEmitter<CalendarDate>();
  montharray: CalendarDate[][][] = [];fmontharray: CalendarDate[][][] = [];
  constructor(public http: Http, public data: DataService, private ref: ChangeDetectorRef) {
  	
  	 this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.finarr = res.result;
    });
    ref.detach();setInterval(() => {if (!this.ref['destroyed']) {
    this.ref.detectChanges();
} }, 300);
  }
  info: any[]=[];
  holidayarr: any[] = [{name: 'Diwali',date: '2018-09-25'},{name: 'Pongal',date: '2019-01-02'},{name: 'Holi',date: '2019-02-15'},{name: 'Moharam',date: '2018-09-21'}];
  createcalendar(val, val2){
  	this. http.post(envin + '/holiday/getPublicHoliday',{token: localStorage.getItem('tokenbranch'), id: val2})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.result);
    	this.holidayarr = res.result;
      console.log(val);console.log(this.data.sdate);
      //console.log(this.data.days.split(''));
      this.inputdate = val.split('T',1);
      this.inputdate = this.inputdate[0];
      console.log(this.inputdate);
      var datear = this.inputdate.split('-');
      datear[0]++;
      this.inputdate2 = datear[0]+'-'+datear[1]+'-'+datear[2];
      console.log(this.inputdate2);
      var dateString = this.inputdate;
      this.currentDate = moment(dateString, 'YYYY-MM-DD');
      for(let i=0; i<=12;i++){
        var clone = this.currentDate.clone();
        this.firstmonth.push(clone.startOf('month'));
        this.info.push([this.currentDate.format('MMMM'),this.currentDate.format('YYYY')])
        this.generateCalendar();
        this.currentDate.add(1, 'M');
        //console.log(this.currentDate);
      }
	this.fmontharray = this.montharray;
	this.selbool = !this.selbool;
	//console.log(this.firstmonth);console.log(this.info);
    });
  }
  ngOnInit(): void {
  	
  }

  hover(val,i){
  //	console.log(val);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedDates &&
        changes.selectedDates.currentValue &&
        changes.selectedDates.currentValue.length  > 1) {
      // sort on date changes for better performance when range checking
      this.sortedDates = _.sortBy(changes.selectedDates.currentValue, (m: CalendarDate) => m.mDate.valueOf());
      this.generateCalendar();
    }
  }

  // date checkers
  isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }
  
  isSelected(date: moment.Moment): boolean {
    return _.findIndex(this.selectedDates, (selectedDate) => {
      return moment(date).isSame(selectedDate.mDate, 'day');
    }) > -1;
  }

  isholidayf(date: moment.Moment): boolean {

  	//return false;

  	if(this.holidayarr != undefined){
  	for(let obj of this.holidayarr){
  		var datear = obj.date.split('T',1)[0];
  	if(date.format('YYYY-MM-DD') === datear){
  		return true;
  	}}
   }
  }
  isholidayf1(date: moment.Moment): boolean {
  	//return false;
  	if(date.format('YYYY-MM-DD')=== '2018-09-25'){
  		//var datear = obj.date.split('T',1)[0];
  		if(!this.isToday(date))
  		return true;
  		else 
  		return false;
  	}
  	for(let obj of this.holidayarr){
  	if(date.format('YYYY-MM-DD') === obj.date){
  		//return true;
  	}
   }
  }
  holidaynamef(date: moment.Moment): string {

  	if(this.holidayarr != undefined){
  for(let obj of this.holidayarr){
  	var datear = obj.date.split('T',1)[0];
  	if(date.format('YYYY-MM-DD') === datear){
  		return obj.name;
  	}
   }
  }}
 

  isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }
  islesser(date: moment.Moment,i): boolean {
  var dummydate = this.currentDate;
  var curdate = this.fmontharray[i][0][0];
    return moment(date).isBefore(this.inputdate);
  }
  issame(date: moment.Moment,i): boolean {
  return moment(date).isSame(this.firstmonth[i],'month');
  }

  ishigher(date: moment.Moment,i): boolean {
  var dummydate = this.currentDate;
    return moment(date).isAfter(this.inputdate2);
  }

  selectDate(date: CalendarDate): void {
   // this.onSelectDate.emit(date);
   //console.log(date);
   //this.selbool = !this.selbool;
  }
  closesel(){
  	this.selbool=!this.selbool;
  }

  // actions from calendar
  prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

  firstMonth(): void {
    this.currentDate = moment(this.currentDate).startOf('year');
    this.generateCalendar();
  }

  lastMonth(): void {
    this.currentDate = moment(this.currentDate).endOf('year');
    this.generateCalendar();
  }

  prevYear(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'year');
    this.generateCalendar();
  }

  nextYear(): void {
    this.currentDate = moment(this.currentDate).add(1, 'year');
    this.generateCalendar();
  }

  // generate the calendar grid
  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    
    this.weeks = weeks;
    this.montharray.push(this.weeks);

  }

  fillDates(currentMoment: moment.Moment): CalendarDate[] {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    //this.firstmonth.push(this.currentDate);
    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    const start = firstDayOfGrid.date();
    return _.range(start, start + this.currentDate.daysInMonth()+ firstOfMonth)
            .map((date: number): CalendarDate => {
              const d = moment(firstDayOfGrid).date(date);

              return {
                today: this.isToday(d),
                selected: this.isSelected(d),
                mDate: d,
                isholiday: this.isholidayf(d),
                holidayname: this.holidaynamef(d),
              };
            });
  }


}
