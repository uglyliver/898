import { Component,ChangeDetectorRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {DataService} from '../data.service';
import { Http } from '@angular/http';
import {envin} from '../data.service'; //envin + '/


export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
  isholiday?:boolean;
  holidayname?:string;
  isnotwork?:boolean;
  isbooked?: string;
  isunapproved?: boolean;
  future?:boolean;
}


@Component({
  selector: 'app-holiday-book',
  templateUrl: './holiday-book.component.html',
  styleUrls: ['./holiday-book.component.scss']
})
export class HolidayBookComponent implements OnInit {
selbool: boolean =false;future:boolean=true;
  firstmonth: any[]=[];
  inputdate: any;inputdate2: any;
  currentDate = moment();
  dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  weeks: CalendarDate[][] = [];
  sortedDates: CalendarDate[] = [];

  @Input() selectedDates: CalendarDate[] = [];
  h1:any;
  h2:any;
  h3:any;
  approvalarr: any[];

  // @Output() onSelectDate = new EventEmitter<CalendarDate>();
  montharray: CalendarDate[][][] = [];fmontharray: CalendarDate[][][] = [];
  constructor(private ref: ChangeDetectorRef, public http: Http, public data: DataService) {
  		ref.detach();
  		setInterval(() => { if (!this.ref['destroyed']) {
    		this.ref.detectChanges();} }, 300);
    	this.http.post(envin + '/holiday/getMyHolidayRequests',{token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.result);
	    	this.approvalarr = res.result;
	    });
 
	    this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.bio[0]);
	    	this.h1 = res.bio[0].holiday1.split(',');
	    	this.h2 = res.bio[0].holiday2.split(',');
	    	this.h3 = res.bio[0].holiday3.split(',');

	    console.log(this.h1, this.h2,this.h3);
	    }); 

  	//getMyHolidayRequests
  	  
	    this.createcalendar();
  }
  fullhalf: string[] = ['Full Day', 'AM', 'PM'];
  fullhalfval: string= '';

  info: any[]=[];
  selbool2: boolean;
  Bookbool: boolean = false;
  holidaytypes: any[] = [{name: 'sick leave', days: '20'},{name: 'Time in lieu', days: '30'},{name: 'Business leave', days: '40'}]
  holidayarr: any[] = [{name: 'Diwali',date: '2018-09-25'},{name: 'Pongal',date: '2019-01-02'},{name: 'Holi',date: '2019-02-15'},{name: 'Moharam',date: '2018-10-25'}];
  createcalendar(){
  	  	this. http.post(envin + '/holiday/getPublicHoliday',{token: localStorage.getItem('tokenbranch'), id: this.data.yearid})
    .map(response => response.json())
    .subscribe(res =>{
    console.log(res.result);
    this.holidayarr = res.result;
  	this.inputdate = this.data.sdate;
  	console.log(this.data.sdate);
  	if(this.inputdate != undefined){
  	this.inputdate = this.inputdate[0];
  	//console.log(this.inputdate);
  	var datear = this.inputdate.split('-');
  	datear[0]++;
  	this.inputdate2 = datear[0]+'-'+datear[1]+'-'+datear[2];
  	//console.log(this.inputdate2);
  	var dateString = this.inputdate;
	this.currentDate = moment(dateString, 'YYYY-MM-DD');
	for(let i=0; i<=12;i++){
		var clone = this.currentDate.clone();
	this.firstmonth.push(clone.startOf('month'));
	this.info.push([this.currentDate.format('MMMM'),this.currentDate.format('YYYY')])
    this.generateCalendar();
    this.currentDate.add(1, 'M');}
	}
	this.fmontharray = this.montharray;
	this.selbool2 = true;
    });

  }
  ngOnInit(): void {
  	
  }
  holiday_date: any;
  holibool: boolean=false;
  holidaylist: any[] = [];
  add(val){
  	this.holidaylist.push({name: val.name, days: val.days, type: val.fullhalf, date: this.holiday_date});
  	this.holibool = true;
	this.Bookbool=false;
  }
  delete_holi(i){
  	this.holidaylist.splice(i,1);
  }
  make_holi(arr){
      if(arr.length>0){

      if(arr[0].type == 'Full Day'){
    this.http.post(envin + '/holiday/requestHoliday',{token: localStorage.getItem('tokenbranch'),
        date:arr[0].date,type: arr[0].name, yearid: this.data.yearid, fullday:'1', })
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{

        console.log(res.bio[0]);
        this.h1 = res.bio[0].holiday1.split(',');
        this.h2 = res.bio[0].holiday2.split(',');
        this.h3 = res.bio[0].holiday3.split(',');
       
      console.log(this.h1, this.h2,this.h3);
       arr.shift()
        this.make_holi(arr);
      });
      if(res.success == true)
      this.holibool = false; 
      });
  }
  else if(arr[0].type == 'AM'){
    this.http.post(envin + '/holiday/requestHoliday',{token: localStorage.getItem('tokenbranch'),
        date:arr[0].date,type: arr[0].name, yearid: this.data.yearid, fullday:'0', ampm: '0' })
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res.bio[0]);
        this.h1 = res.bio[0].holiday1.split(',');
        this.h2 = res.bio[0].holiday2.split(',');
        this.h3 = res.bio[0].holiday3.split(',');
      console.log(this.h1, this.h2,this.h3);
       arr.shift()
        this.make_holi(arr);
      });
      if(res.success == true)
      this.holibool = false; 
      });
  }
  else if(arr[0].type == 'PM'){
    this.http.post(envin + '/holiday/requestHoliday',{token: localStorage.getItem('tokenbranch'),
        date:arr[0].date,type: arr[0].name, yearid: this.data.yearid, fullday:'0', ampm: '1' })
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res);
        this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res.bio[0]);
        this.h1 = res.bio[0].holiday1.split(',');
        this.h2 = res.bio[0].holiday2.split(',');
        this.h3 = res.bio[0].holiday3.split(',');
      console.log(this.h1, this.h2,this.h3);
       arr.shift()
        this.make_holi(arr);
      });
      if(res.success == true)
      this.holibool = false;
      });
  }}
  }
  apply_holiday(val2){
  	console.log(val2);
    this.make_holi(val2);
/*  	for(let val3 of val2){//['Full Day', 'AM', 'PM'];


  		if(val3.type == 'Full Day'){
  	this.http.post(envin + '/holiday/requestHoliday',{token: localStorage.getItem('tokenbranch'),
        date:val3.date,type: val3.name, yearid: this.data.yearid, fullday:'1', })
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res);
	    	this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{

	    	console.log(res.bio[0]);
	    	this.h1 = res.bio[0].holiday1.split(',');
	    	this.h2 = res.bio[0].holiday2.split(',');
	    	this.h3 = res.bio[0].holiday3.split(',');
	    console.log(this.h1, this.h2,this.h3);
	    });
	    if(res.success == true)
	    this.holibool = false; 
	    });
	   // this.montharray=[];
	   
	}
	else if(val3.type == 'AM'){
		this.http.post(envin + '/holiday/requestHoliday',{token: localStorage.getItem('tokenbranch'),
        date:val3.date,type: val3.name, yearid: this.data.yearid, fullday:'0', ampm: '0' })
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res);
	    	this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.bio[0]);
	    	this.h1 = res.bio[0].holiday1.split(',');
	    	this.h2 = res.bio[0].holiday2.split(',');
	    	this.h3 = res.bio[0].holiday3.split(',');
	    console.log(this.h1, this.h2,this.h3);
	    });
	    if(res.success == true)
	    this.holibool = false; 
	    });
	}
	else if(val3.type == 'PM'){
		this.http.post(envin + '/holiday/requestHoliday',{token: localStorage.getItem('tokenbranch'),
        date:val3.date,type: val3.name, yearid: this.data.yearid, fullday:'0', ampm: '1' })
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res);
	    	this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.bio[0]);
	    	this.h1 = res.bio[0].holiday1.split(',');
	    	this.h2 = res.bio[0].holiday2.split(',');
	    	this.h3 = res.bio[0].holiday3.split(',');
	    console.log(this.h1, this.h2,this.h3);
	    });
	    if(res.success == true)
	    this.holibool = false;
	    });
	}

}*/
 this.montharray=[];
 this.http.post(envin + '/holiday/getMyHolidayRequests',{token: localStorage.getItem('tokenbranch')})
      .map(response => response.json())
      .subscribe(res =>{
        console.log(res.result);
        this.approvalarr = res.result;
this.holidaylist =[];
      this.createcalendar();
      });
  }
  hover(val,i){
  //	console.log(val);
  }
  sel2(val,i){
  	this.fullhalfval = val;
  }
  counter: number=0;
  c: number = 400;
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
isholidayfbool:boolean = false;
  isholidayf(date: moment.Moment): boolean {
  	//return false;
  	
  	if(this.holidayarr != undefined){
  	for(let obj of this.holidayarr){
  		var datear = obj.date.split('T',1)[0];
  	if(date.format('YYYY-MM-DD') === datear){
  		this.isholidayfbool = true; 
  		return true;
  		
  	}
   }
  }
  }
  isholidayf1(date: moment.Moment): boolean {
  	//return false;
  	if(date.format('YYYY-MM-DD')=== '2018-09-25'){
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
  	if(date.format('YYYY-MM-DD') === obj.date){
  		return obj.name;
  	}
   }}
  }

  notworkbool: boolean = false; 
  notwork(date: moment.Moment): boolean {
  	for(let obj of this.data.days.split('')){
  	if(date.format('d') === obj){
  		this.notworkbool = true; 
  		return true;
  	}
   }
  }

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
  isfuture(date: moment.Moment): boolean {
    var now = moment();
    return moment(date).isAfter(now);
  }
  bookedday(date: moment.Moment): string{ //date(with T) //status(0 or 1)

  	if(this.approvalarr != undefined){
  	for(let obj of this.approvalarr){
  		var datear = obj.date.split('T',1)[0];
  	if((date.format('YYYY-MM-DD') === datear) && obj.status == '1'){
      return '1';
    }
    else if((date.format('YYYY-MM-DD') === datear) && obj.status == '2'){
      return '2';
    }
   }
  }
  return null;
  }
  unapproved(date: moment.Moment): boolean{
  	if(this.approvalarr != undefined){
  	for(let obj of this.approvalarr){
  		var datear = obj.date.split('T',1)[0];
    if((date.format('YYYY-MM-DD') === datear) && ((obj.status == '0') || (obj.status == undefined) || (obj.status == null))){
      return true;
    }
   }
  }
  return false;
  }

  selectDate(date: CalendarDate): void {
   // this.onSelectDate.emit(date);
   this.holiday_date = date.mDate.format('YYYY-MM-DD');
   console.log(date);
   let top = document.getElementById('top');
   top.scrollIntoView();
   this.Bookbool = !this.Bookbool;
  }
  closesel(){
  	this.Bookbool=!this.Bookbool;
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
               // today: this.isToday(d),
               // selected: this.isSelected(d),
                mDate: d,
                isholiday: this.isholidayf(d),
                holidayname: this.holidaynamef(d),
                isnotwork: this.notwork(d),
                isbooked: this.bookedday(d),
                isunapproved: this.unapproved(d),
                future: this.isfuture(d),
              };
            });
  }
}
