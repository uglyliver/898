import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Http } from '@angular/http';
import * as moment from 'moment';
import { AmazingTimePickerService } from 'amazing-time-picker';

import {envin} from '../data.service'; //envin + '/


@Component({
  selector: 'app-hrconfig1',
  templateUrl: './hrconfig1.component.html',
  styleUrls: ['./hrconfig1.component.scss']
})
export class Hrconfig1Component implements OnInit {
  dayarr: string[] = ["Sunday" , "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  selval: string;
  selval2: string;
  displayday: string;
  i1: number;
  i2: number;
  public selectedTime: string;
    open2() {
        const amazingTimePicker = this.atp.open({
                time:  this.selectedTime,
                onlyHour: false, 
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
    public selectedTime2: string;
    open3() {
        const amazingTimePicker = this.atp.open({
                time:  this.selectedTime2,
                onlyHour: false, 
                theme: 'dark',
                arrowStyle: {
                    background: 'red',
                    color: 'white'
                }
            });
        amazingTimePicker.afterClose().subscribe(time => {
            this.selectedTime2 = time;
        });
    }
    public selectedTime3: string;
    open4() {
        const amazingTimePicker = this.atp.open({
                time:  this.selectedTime3,
                onlyHour: false, 
                theme: 'dark',
                arrowStyle: {
                    background: 'red',
                    color: 'white'
                }
            });
        amazingTimePicker.afterClose().subscribe(time => {
            this.selectedTime3 = time;
        });
    }
    public selectedTime4: string;
    open5() {
        const amazingTimePicker = this.atp.open({
                time:  this.selectedTime4,
                onlyHour: false, 
                theme: 'dark',
                arrowStyle: {
                    background: 'red',
                    color: 'white'
                }
            });
        amazingTimePicker.afterClose().subscribe(time => {
            this.selectedTime4 = time;
        });
    }
  constructor(public http: Http, public data: DataService, private atp: AmazingTimePickerService) {
  	//getshift //getlimit
  	 this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.finarr = res.result;
    });
    this. http.post(envin + '/branch/getlimit',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result[0]);
    data.yearname = res.result[0].yearname;
	  data.sdate= res.result[0].sdate;
	  data.edate= res.result[0].edate;
	  data.sdate= data.sdate.split('T',1);
	  data.edate= data.edate.split('T',1);
	  data.maxWH= res.result[0].maxWH;
	  data.minWH= res.result[0].minWH;
	  data.minWHW= res.result[0].minWHW;
    data.days= res.result[0].days;
    data.yearid= res.result[0].yearid;
	  this.displayday = '';
  	  this.displayday = this.dayarr[this.data.days.charAt(0)] + ' to ' + this.dayarr[this.data.days.charAt(this.data.days.length-1)];
    });
   }
   public now: any;
   //dropyears
   drop_year(val){
   	this. http.post(envin + '/branch/dropyears',{token: localStorage.getItem('tokenbranch'),id: val })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.finarr = res.result;
    });
    });   	
   }
  create_shift(obj){
  	this. http.post(envin + '/branch/addshift',{token: localStorage.getItem('tokenbranch'),
  	 name: obj.name,stime: obj.stime, etime: obj.etime, cetime: obj.cetime, cstime: obj.cstime })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/branch/getshift',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.data.shift_array = res.result;
    });
    });
  }
  drop_shift(id){
  	//dropshift
  	this. http.post(envin + '/branch/dropshift',{token: localStorage.getItem('tokenbranch'),shiftid: id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/branch/getshift',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.data.shift_array = res.result;
    });
    });
  }
  fin_year(obj){
	 this.data.sdate=obj.sdate;
	 obj.sdate = obj.sdate.split('T',1);
	 obj.sdate = obj.sdate[0];
	 console.log(obj.sdate);
	 this.datear = obj.sdate.split('-');
	 this.datear[0]++;
	 obj.edate = this.datear[0]+ '-' + this.datear[1] + '-' + this.datear[2];
	 console.log(obj.edate);

  	this. http.post(envin + '/branch/addyears',{token: localStorage.getItem('tokenbranch'),
      yearname: obj.yearname, sdate: obj.sdate, edate: obj.edate })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.finarr = res.result;
    });
    });
  }
  it: number;
  datear: any;
  set_limit(str,obj){
  	if(str=='year'){
      this.data.yearid = obj.yid;
  	 this.data.yearname= obj.yearname;
	 this.data.sdate=obj.sdate;
	 this.data.sdate = this.data.sdate.split('T',1);
	 this.data.sdate = this.data.sdate[0];
	 console.log(this.data.sdate);
	 this.datear = this.data.sdate.split('-');
	 this.datear[0]++;
	 this.data.edate = this.datear[0]+ '-' + this.datear[1] + '-' + this.datear[2];
	 console.log(this.data.edate);

	   	}
  	else if(str=='minday'){
 	this.data.minWH = obj;
  	}
  	else if(str=='minweek'){
  		this.data.minWHW = obj;}
  	else if(str=='maxday'){
  		this.data.maxWH = obj;}
  	else if(str=='days'){
  		this.it = this.i1;
  		this.data.days ='';
  		if(this.i1<= this.i2){
  		while(this.it <= this.i2){
  			this.data.days = this.data.days + this.it;
  			this.it++;
  		} }
  		if(this.i1 > this.i2){
  		while(this.it <=6){
  			this.data.days = this.data.days + this.it;
  			this.it++;
  		}
  		this.it = 0;
  		while(this.it <= this.i2){
  			this.data.days = this.data.days + this.it;
  			this.it++;
  		} }
  		this.displayday = '';
  		this.displayday = this.dayarr[this.data.days.charAt(0)] + ' to ' + this.dayarr[
  		this.data.days.charAt(this.data.days.length-1)];
  		console.log(this.data.days);
  	}

  	this. http.post(envin + '/branch/setlimit',{token: localStorage.getItem('tokenbranch'),
     yearname: this.data.yearname,
     yearid: this.data.yearid,
	 sdate: this.data.sdate,
	 edate: this.data.edate,
	 maxWH: this.data.maxWH,
	 minWH: this.data.minWH,
	 minWHW: this.data.minWHW,
	 day: this.data.days
	})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       this. http.post(envin + '/branch/getlimit',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result[0]);
      this.data.yearname = res.result[0].yearname;
	  this.data.sdate= res.result[0].sdate;
	  this.data.edate= res.result[0].edate;
	  this.data.sdate= this.data.sdate.split('T',1);
	  this.data.edate= this.data.edate.split('T',1);
	  this.data.maxWH= res.result[0].maxWH;
	  this.data.minWH= res.result[0].minWH;
	  this.data.minWHW= res.result[0].minWHW;
	  this.data.days= res.result[0].days;
    });
    });
  }
  ngOnInit() {
  }
  sel(val,val2){
  	this.selval = val;
  	this.i1 = val2;
  }
  sel2(val, val2){
  	this.selval2 = val;
    this.i2 = val2;
  }
}
