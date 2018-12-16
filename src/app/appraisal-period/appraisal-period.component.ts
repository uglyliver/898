import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/


import { Http } from '@angular/http';
@Component({
  selector: 'app-appraisal-period',
  templateUrl: './appraisal-period.component.html',
  styleUrls: ['./appraisal-period.component.scss']
})
export class AppraisalPeriodComponent implements OnInit {
	finbool: boolean = true;objbool: boolean = false;
	objarr11: any[] = [];objarr12: any[] = [];appid2:any;empbool:boolean = false;eid:string;
	pid: any;brancharray:any[]=[];emp_sync:string='';
  yid: any; apparr: any[]=[];objarr1: any[] = [];objarr2: any[] = [];appid: any;
  constructor(public data: DataService, public http: Http) {
    this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.brancharray = res.result;
    });

     }
  ngOnInit() {
  }
  open_emp(i,i2){
    this.appid = i;
  this.appid2 = i2;
    
    this.empbool = true;
  }
  add_obj(val1,val2){
  	console.log(this.appid,this.objarr11,this.objarr12);
  	this.http.post(envin + '/commerce/addObjective',{token: localStorage.getItem('tokenbranch'), eid:this.eid,
  	 pid: this.appid, objectivesDescription: val1, objectivesDeadline: val2, objectivesTitle: val1})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this.http.post(envin + '/commerce/getObjectives',{token: localStorage.getItem('tokenbranch'), eid:this.eid, pid: this.appid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.objarr11 = res.result;
    });
    });
  }
  delete_obj(i){//dropObjective
  		console.log(i,this.objarr11,this.objarr12);
  	this.http.post(envin + '/commerce/dropObjective',{token: localStorage.getItem('tokenbranch'), eid: this.eid,
  	 id: i})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this.http.post(envin + '/commerce/getObjectives',{token: localStorage.getItem('tokenbranch'), pid: this.appid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.objarr11 = res.result;
    });
    });
  }
  del_per(id){//dropPeriod
    this.http.post(envin + '/commerce/dropPeriod',{token: localStorage.getItem('tokenbranch'),
 id: id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/commerce/getPeriod',{token: localStorage.getItem('tokenbranch'),
       yid: this.yid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.apparr = res.result;

    });
    });
  }
select_year(val1,val2){
	this.yid = val2;
	this.finbool = !this.finbool;

    this.http.post(envin + '/commerce/getPeriod',{token: localStorage.getItem('tokenbranch'), yid: this.yid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.apparr = res.result;

    });
}
open_obj(id){//i,i2
	this.objarr11 = [];
  this.eid =id;
	/*this.appid = i;
	this.appid2 = i2;*/
	  	this.http.post(envin + '/commerce/getObjectives',{token: localStorage.getItem('tokenbranch'),eid:this.eid, pid: this.appid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.objarr11 = res.result;
    });
	this.objbool = true;
  this.empbool = false;

	/*this.objarr11 = [];this.objarr1 = [];this.objarr2 = [];this.objarr12 = [];
	if(this.apparr[this.appid2].objectivesDescription != null){
	this.objarr11 = [];this.objarr1 = [];this.objarr2 = [];this.objarr12 = [];
	this.objarr1 = this.apparr[this.appid2].objectivesDescription;
	this.objarr11 = Array.from(this.objarr1);
	this.objarr2 = this.apparr[this.appid2].objectivesDeadline;
	this.objarr12 = Array.from(this.objarr2);*/
	//}
	console.log(this.objarr11,this.objarr12)

}
close_obj(){
	this.objbool = !this.objbool;
}
submit_period(val,val1){
this.http.post(envin + '/commerce/addPeriod',{token: localStorage.getItem('tokenbranch'),
 yid: this.yid, sdate: val, edate: val1})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/commerce/getPeriod',{token: localStorage.getItem('tokenbranch'),
       yid: this.yid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.apparr = res.result;

    });
    });

 }
}
