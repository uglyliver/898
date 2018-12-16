import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {envin} from '../data.service'; //envin + '/

import {DataService} from '../data.service';
@Component({
  selector: 'app-holiday-type',
  templateUrl: './holiday-type.component.html',
  styleUrls: ['./holiday-type.component.scss']
})
export class HolidayTypeComponent implements OnInit {
	
  constructor(public http: Http, public data: DataService) { 
  	//typearr: any[]=[];
  	this.http.post(envin + '/holiday/getHolidayTypes',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.typearr = res.result;
    });}

  ngOnInit() {
  }
  create_type(val1,val2){
  	 this.http.post(envin + '/holiday/addHolidayType',{token: localStorage.getItem('tokenbranch'), name: val1, days: val2})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       this.http.post(envin + '/holiday/getHolidayTypes',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.typearr = res.result;
    });
    });
  }
  deltype(i){
  		 this.http.post(envin + '/holiday/dropHolidayType',{token: localStorage.getItem('tokenbranch'), id: i})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       this.http.post(envin + '/holiday/getHolidayTypes',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.typearr = res.result;
    });
    });
  }
}