import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/


import * as moment from 'moment';
import { Http } from '@angular/http';
@Component({
  selector: 'app-pending-holiday',
  templateUrl: './pending-holiday.component.html',
  styleUrls: ['./pending-holiday.component.scss']
})
export class PendingHolidayComponent implements OnInit {
  today=moment().format('YYYY-MM-DD');
	approvalarr: any[] =[];//original
	approvalarr1: any[] =[];//copy to display
	approvalarr2: any[] =[];//approved
	approvalarr3: any[] =[];//pending
	emparr: any[];startdate;enddate;
	empid: any ;
  constructor(public data: DataService, public http: Http) {
  	this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.emparr = res.result;
		    });
  	this. http.post(envin + '/holiday/getHolidayRequests',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.approvalarr = res.result;
      if(this.approvalarr!= undefined && this.approvalarr!= null){
      this.approvalarr1 = Array.from(this.approvalarr);
      for(let v of this.approvalarr){
      	if(v.status==1 || v.status == 2)this.approvalarr2.push(v);
      	if(v.status==0 || v.status == null || v.status == undefined)this.approvalarr3.push(v);
      }}
    });
  }

  delete_holi(obj){
    this. http.post(envin + '/holiday/dropHoliday2',{token: localStorage.getItem('tokenbranch'), id: obj.id})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
              this. http.post(envin + '/holiday/getHolidayRequests',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.approvalarr = res.result;
      if(this.approvalarr!= undefined && this.approvalarr!= null){
      this.approvalarr1 = Array.from(this.approvalarr);
      for(let v of this.approvalarr){
        if(v.status==1 || v.status == 2)this.approvalarr2.push(v);
        if(v.status==0 || v.status == null || v.status == undefined)this.approvalarr3.push(v);
      }}
    });
  });
  }

  daybool: boolean = false;
  open_day(val){
  	this.daybool = !this.daybool;
  	this.empid = val;
  }
  close_day(){
  	this.daybool = false;
  }
  approved(){
  	this.approvalarr1 = Array.from(this.approvalarr2);
  	console.log(this.approvalarr1)
  }
  pending(){
  	this.approvalarr1 = Array.from(this.approvalarr3);
  }
  idtoname(id) : string{
  	for(let val of this.emparr){
  		if(val.id == id)return val.name;
  	}
  }
  glancebool: boolean = false;
  glance(){
  	let top = document.getElementById('top');
   top.scrollIntoView();
  	this.approvalarr1 = Array.from(this.approvalarr);
  this.glancebool=!this.glancebool;	
  }
  ap(obj,res){
  this.approvalarr =[];//original
	this.approvalarr1 =[];//copy to display
	this.approvalarr2 =[];//approved
	this.approvalarr3 =[];//pending
  	this. http.post(envin + '/holiday/approveHoliday',{token: localStorage.getItem('tokenbranch')
  		,empid: obj.empid, status: res, type: obj.type, id: obj.id })
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this. http.post(envin + '/holiday/getHolidayRequests',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.result);
      this.approvalarr = res.result;
      this.approvalarr1 = Array.from(this.approvalarr);
      for(let v of this.approvalarr){
      	if(v.status==1 || v.status == 2)this.approvalarr2.push(v);
      	if(v.status==0)this.approvalarr3.push(v);
        //do for disapprove
      }
    });
    });

    this.daybool = false;
  }
  ngOnInit() {
  }

}
