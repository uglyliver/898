import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {envin} from '../data.service'; //envin + '/

import {DataService} from '../data.service';
@Component({
  selector: 'app-holiday-type2',
  templateUrl: './holiday-type2.component.html',
  styleUrls: ['./holiday-type2.component.scss']
})
export class HolidayType2Component implements OnInit {
editbranchbool: boolean = false;
selectedtypes: any[] = [];
editembool: boolean = false;
benbool: boolean = false;
arrbn: string = "";
arreq: string = "";
curemail: string;
benefits: string;
benefitsa: string[];
curid: string;
curbranchid: any;
brancharray: any[];
secvar: string;
eqbool: boolean = false;
selcomsval: string = '';
selcomszval: string = '';
i: number;
selcomszzval: string = '';

  constructor(public http: Http, public data: DataService) {
  	
  this.http.post(envin + '/holiday/getHolidayEmployee',{token: localStorage.getItem('tokenbranch'),type: this.emptype })
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res);
	    	this.data.typeres = res.result;
	    	this.benbool=false;
	    }); }

  emptype: string;
  ngOnInit() {

  }
  openassign(id){

  }
  drop_typerel(i){
  		this.http.post(envin + '/holiday/dropHolidayEmployee',{token: localStorage.getItem('tokenbranch'),
    id: i})
    .map(response => response.json())
    .subscribe(res =>{
	    console.log(res);
	    this. http.post(envin + '/holiday/getHolidayEmployee',{token: localStorage.getItem('tokenbranch'),type: this.emptype })
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res);
	    	this.data.typeres = res.result;
	    	this.benbool=false;
	    });
    }); 
  }
  opnben(val,sec,val2){
  	this.emptype = val;
    this.curemail = val;
    this.curid = val2;
    this.secvar = sec;
    this.benbool = !this.benbool;
  }
    closeben(){
    this.benbool = !this.benbool;
  }
  submit_type(){
  	for(let v of this.selectedtypes){
  		this.http.post(envin + '/holiday/addHolidayEmployee',{token: localStorage.getItem('tokenbranch'),
    holiday_type: v.name, holiday_days: v.days, employee_type: this.emptype })
    .map(response => response.json())
    .subscribe(res =>{
	    console.log(res);
	    this. http.post(envin + '/holiday/getHolidayEmployee',{token: localStorage.getItem('tokenbranch'),type: this.emptype })
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res);
	    	this.data.typeres = res.result;
	    	this.benbool=false;
	    });
    });
    //getHolidayEmployee
  	}
  }

  selben(i,val){
    this.selectedtypes.push(val);
  }
  selben2(i,val){
  	this.selectedtypes.splice(i,1);
    //this.data.benifitsarr.push(this.data.benifitsarr2[i]);
    //this.data.benifitsarr2.splice(i,1);
  }
}
