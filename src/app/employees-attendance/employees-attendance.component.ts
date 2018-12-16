import { Component,ViewChild, OnInit,ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

import * as moment from 'moment';

@Component({
  selector: 'app-employees-attendance',
  templateUrl: './employees-attendance.component.html',
  styleUrls: ['./employees-attendance.component.css']
})
export class EmployeesAttendanceComponent implements AfterViewInit {
  previd: string;previntime: string;startdate;enddate;str='true';
   public selectedTime: string = this.previntime;
    open() {
        const amazingTimePicker = this.atp.open({
                time:  this.selectedTime,
                theme: 'dark',
                arrowStyle: {
                    background: 'red',
                    color: 'white'
                }
            });
        amazingTimePicker.afterClose().subscribe(time => {
            this.selectedTime = time;
        });
    }
  work_con: string[] = ['Holiday', 'Pay'];
  latearr: any[]=[];
  selval: string;
  shift_array: any[];
  shf: any;
  temp1: string ='not assigned';
  temp2: string;
  temp3: string;
  temp4: string;
  temp5: string;
  clockoutbool: boolean = false;
  splitT(val): string[] {
    return val.split('T',1);
  }time3;

  time2: string='';
  description: string='';
  convert: string='';latebool:boolean=false;descman;convertman;
  monthly: string; weekly: string; yearly: string;str1;str2;
  constructor(public http: Http, public data: DataService, private atp: AmazingTimePickerService) {//myAttendanceHistory//myErrorHistory
    //getovertime
    this.http.post(envin + '/attendance/employee/getovertime',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.time3 = res.result.hours2; //desc2 //holiday2
      this.convertman = res.result.holiday2;
      this.descman = res.result.desc2;
      this.time2 = res.result.hours1;
      this.description = res.result.desc1;
      this.selval = res.result.holiday1;
     /* if(res.result.payment1 ='1'){
        this.selval = 'Pay';
      }
      else if (res.result.holiday1 ='1'){
        this.selval = 'Holiday';
      }*/

    });

    this.open_history(1,1,'day');
    var ind = 0;
    for(let v of this.latearr)
    {
      this.latearr[ind].date =v.date.split('T')[0];
      ind++;
    }

  		http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.bio[0].shiftid);
    this.shf = res.bio[0].shiftid;

  	this. http.post(envin + '/branch/getshift',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res2 =>{
      console.log(res2.result);
      for(let v of res2.result){
      	if(v.id == this.shf){
      		this.temp1 = v.name;
      		this.temp2 = v.stime;
      		this.temp3 = v.etime;
      		this.temp4 = v.cstime;
      		this.temp5 = v.cetime;
      	}
      }
      this.shift_array = res2.result;
    });
    });

  }
  ngAfterViewInit(){

  }
  sel(val){
  	this.selval = val;
  }
  customclockout: boolean=false;
  msg1:string;msg2:string;msg3:string;msg4:string;

  latearrival(str1,str2){
this. http.post(envin + '/attendance/clockin',{token: localStorage.getItem('tokenbranch'),str1:str1,str2:str2
     })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.latebool=false;
      this.previntime = res.result.intime;
      this.previd = res.result.id;

      this.open_history(1,1,'day');
      if(res.msg == 'ClockOut from previous session first'){
        this.customclockout = true;
      }
      if(res.success){
        this.msg1 = res.msg;
        this.msg2 = '';this.msg3 = '';this.msg4 = '';
      }
      if(!res.success){
        this.msg2 = res.msg;
        this.msg1 = '';this.msg3 = '';this.msg4 = '';
      }
    });
  }
  //clockin
  clock_in(){
    var now = moment().format('HH:mm:ss');
    if(this.temp4 < now && now< this.temp5){
      this.latebool=true;
    }
    else{
  	 this. http.post(envin + '/attendance/clockin',{token: localStorage.getItem('tokenbranch'),str1:false,str2:''
  	 })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.previntime = res.result.intime;
      this.previd = res.result.id;

      this.open_history(1,1,'day');
      if(res.msg == 'ClockOut from previous session first'){
        this.customclockout = true;
      }
      if(res.success){
      	this.msg1 = res.msg;
      	this.msg2 = '';this.msg3 = '';this.msg4 = '';
      }
      if(!res.success){
      	this.msg2 = res.msg;
      	this.msg1 = '';this.msg3 = '';this.msg4 = '';
      }
    });
  }
  }
  warning: number;
  clock_out(){
  	 this. http.post(envin + '/attendance/clockout',{token: localStorage.getItem('tokenbranch'), warning: this.warning, booked:'1'})
    .map(response => response.json())
    .subscribe(res =>{

  	if(this.warning == 1){
  		this.warning = 0;}
      console.log(res);

      this.open_history(1,1,'day');
      if(res.success){
      	this.msg3 = res.msg;
      	this.msg1 = '';this.msg2 = '';this.msg4 = '';
      }
      if(!res.success){
      
      	if(res.msg == 'Warning: Clocking out before shift end time'){
      		this.warning = 1;
      	}
      	this.msg4 = res.msg;
      	this.msg1 = '';this.msg3 = '';this.msg2 = '';
      }
      this.open_clock_out();
    });
  }
  dailyarr: any[];
  weekno: any[]=[];
  monthno: any[]=[];
  yearno: any[]=[];

  open_history(val1, val2, val3){
     this.http.post(envin + '/attendance/myAttendanceHistory',{token: localStorage.getItem('tokenbranch'), id: val1})
    .map(response => response.json())
    .subscribe(res2 =>{
      console.log(res2.daily);
      console.log(res2);
      this.dailyarr = res2.daily;
      this.dailyarr = Array.from(this.dailyarr.slice().reverse())
      for(let day of this.dailyarr){
        for(let clock of day.clock){
          if(clock.str1 == 'true'){
            day['late']=true;
            day['reason']=clock.str2;

          }
        }
      }

     /* for(let v of this.dailyarr){
        this.weekno.push(v.week);
        this.monthno.push(v.month);
        this.yearno.push(v.year);
      }
      function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
        }
      this.weekno = this.weekno.filter( onlyUnique );
      this.monthno = this.monthno.filter( onlyUnique );
      this.yearno = this.yearno.filter( onlyUnique );*/

    });
  }
  submit_overtime(val, val2, val3){///employee/overtime//['Holiday', 'Pay'];
    console.log(val3)
    if(val3 =='Pay'){
    this.http.post(envin + '/attendance/employee/overtime',{token: localStorage.getItem('tokenbranch'),
     time:val, description: val2, payment: '1', holiday: 'Pay'})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
        this.http.post(envin + '/attendance/employee/getovertime',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.time3 = res.result.hours2;
      this.time2 = res.result.hours1;
      this.description = res.result.desc1;
      this.selval = res.result.holiday1;
/*
      if(res.result.payment1 =='1'){
        this.selval = 'Pay';
      }
      else if (res.result.payment1 =='0'){
        this.selval = 'Holiday';
      }
*/
    });

    });}
    if(val3 =='Holiday'){
    this.http.post(envin + '/attendance/employee/overtime',{token: localStorage.getItem('tokenbranch'),
     time:val, description: val2, holiday: 'Holiday', payment: '0'})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);

        this.http.post(envin + '/attendance/employee/getovertime',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.time3 = res.result.hours2;
      this.time2 = res.result.hours1;
      this.description = res.result.desc1;
      
      this.selval = res.result.holiday1;
      /*
      if(res.result.payment1 =='1'){
        this.selval = 'Pay';
      }
      else if (res.result.payment1 =='0'){
        this.selval = 'Holiday';
      }*/

    });

    });}
    
  }
  custom_clock_out(val){
    this. http.post(envin + '/attendance/customclockout',{token: localStorage.getItem('tokenbranch'), warning: this.warning, booked:'1', time: val, id: this.previd })
    .map(response => response.json())
    .subscribe(res =>{

    if(this.warning == 1){
      this.warning = 0;}
      console.log(res);
      if(res.success){
        
        this.msg3 = res.msg;
        this.msg1 = '';this.msg2 = '';this.msg4 = '';
        this.customclockout = !this.customclockout;
      }
      if(!res.success){
        if(res.msg == 'Warning: Clocking out before shift end time'){
          this.warning = 1;
        }
        this.msg4 = res.msg;
        this.msg1 = '';this.msg3 = '';this.msg2 = '';
      }
    });
  }
   open_clock_out(){
   	this.clockoutbool = !this.clockoutbool;
   }
}