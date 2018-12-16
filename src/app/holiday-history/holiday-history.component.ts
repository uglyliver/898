import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/


import { Http } from '@angular/http';
@Component({
  selector: 'app-holiday-history',
  templateUrl: './holiday-history.component.html',
  styleUrls: ['./holiday-history.component.scss']
})
export class HolidayHistoryComponent implements OnInit {
approvalarr=[];approvalarr1=[];approvalarr2=[];approvalarr3=[];
startdate;enddate;
  constructor(public data: DataService, public http: Http) {
  this. http.post(envin + '/holiday/getMyHolidayRequests',{token: localStorage.getItem('tokenbranch')})
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
    }); }
approved(){
  	this.approvalarr1 = Array.from(this.approvalarr2);
  	console.log(this.approvalarr1)
  }
  pending(){
  	this.approvalarr1 = Array.from(this.approvalarr3);
  }
  ngOnInit() {
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
}
