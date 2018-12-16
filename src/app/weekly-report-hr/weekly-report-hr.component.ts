import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from '../data.service';

import {envin} from '../data.service'; //envin + '/

import {packagetype} from '../data.Service';
@Component({
  selector: 'app-weekly-report-hr',
  templateUrl: './weekly-report-hr.component.html',
  styleUrls: ['./weekly-report-hr.component.scss']
})
export class WeeklyReportHrComponent implements OnInit {
	reportarr: any[]=[];brancharray: any[]=[];startdate;enddate;
	dayarr: string[] = ["Sunday" , "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  	day: string;
	monthno: any[]= ['01','02','03','04','05','06','07','08','09','10','11','12'];
  envin2 = envin;emp_sync='';
	employeeid: any;weekbool: boolean = false;monthbool: boolean = false;yearbool: boolean = false;
  constructor( public http: Http, public data: DataService) {
    setTimeout(()=>{
      console.log(this.startdate)
    },10000);

	this.day = this.dayarr[this.data.days.charAt(this.data.days.length-1)];
  	this.http.post(envin + '/commerce/Reports',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.reportarr = res.result;
          console.log(this.reportarr);
		    });
		    	this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	console.log(localStorage.getItem('tokenbranch'));
    	this.brancharray = res.result;
      console.log(this.brancharray);
    });
     } 
  open_report(val1, val2, val3){
  	if(val3 == 'week'){
  	this.weekbool = true;
  		
  	}if(val3 == 'month'){
  	this.monthbool = true;

  	}if(val3 == 'year'){

  	this.yearbool = true;
  		
  	}
  	this.employeeid = val1;
  }
  close_week(){
  	this.weekbool = false;
  }
   close_month(){
  	this.monthbool = false;
  }
  ngOnInit() {
  }

}
