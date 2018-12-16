import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-team-appraisal-eval',
  templateUrl: './team-appraisal-eval.component.html',
  styleUrls: ['./team-appraisal-eval.component.scss']
})
export class TeamAppraisalEvalComponent implements OnInit {

	brancharray: any[]=[];appbool: boolean = false;apparr: any[]=[];appid2: any;
	envin2 = envin;idlist

	appid: any;objarr1: any[]=[];objarr11: any[]=[];objarr2: any[]=[];objarr12: any[]=[];
	empid: any;filearr: any[]; salary: any;role:any;
	eid: any;pid:any;emp_sync='';
  constructor(public data: DataService, public http: Http) { 
  	 this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.finarr = res.result;
    });
  this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.bio[0]);
     this.idlist = res.bio[0].employees.split('-');
      
   this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     // console.log(localStorage.getItem('tokenbranch'));
      for(let emp of res.result){
      	for(let id of this.idlist){
      		if(emp.id == id && id != null && id!= undefined && id != ''){
      			this.brancharray.push(emp);
      		}}}
  	});
    });
    this. http.post(envin + '/branch/getlimit',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      if(res.result != undefined){
      this.data.yearid = res.result[0].yearid;
      this.data.yearname = res.result[0].yearname;
      this.data.sdate= res.result[0].sdate;
      this.data.edate= res.result[0].edate;
      this.data.sdate= this.data.sdate.split('T',1);
      this.data.edate= this.data.edate.split('T',1);
      this.data.maxWH= res.result[0].maxWH;
      this.data.minWH= res.result[0].minWH;
      this.data.minWHW= res.result[0].minWHW;
      this.data.days= res.result[0].days;}
      console.log(this.data.yearid);
        this.http.post(envin + '/commerce/getPeriod',{token: localStorage.getItem('tokenbranch'), yid: this.data.yearid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.apparr = res.result;
    });
    });
    
	}
	objarr:any[]=[];
	cur_desc: string;
  set_year(id){
     this.http.post(envin + '/commerce/getPeriod',{token: localStorage.getItem('tokenbranch'), yid: id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.apparr = res.result;
    });
  }
	select(oid){
		this.cur_desc = '';
		this.filearr = [];
		this.http.post(envin + '/commerce/getAppraisal',{token: localStorage.getItem('tokenbranch'),
		 eid: this.eid,pid: this.pid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      if(res.object != null || res.object != undefined){
      this.objarr = res.object;
      for(let v of this.objarr){
      	if(v.id.oid == oid){
      		this.cur_desc = v.objectivesDescription;
      		if(v.files != null || v.files != undefined ){
      			this.filearr = v.files;
      		}
      	}
      }
}
    });
	}
	selcomsval:any;
	selcoms(v){
		this.selcomsval = v;
	}
	submit_ed_br(obj){
  	this. http.post(envin + '/branch/updateEmployee',{
  		token: localStorage.getItem('tokenbranch'),role: this.selcomsval, branchid: this.brancharray[this.ind].branchid,name: obj.name, email: obj.email
  	    , pan: obj.pan,type: obj.type, dob: this.brancharray[this.ind].dob, salary: obj.salary, benefit: this.brancharray[this.ind].benefit, equip: this.brancharray[this.ind].equip})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.brancharray = res.result;
		    	this.appbool = false;
		    });
    });
  }
ind:number;
	open_app(val,val2, val3,i){
		this.ind = i;
		this.salary = this.brancharray[i].salary;
		this.role = this.brancharray[i].role;
		this.eid = val;
		this.pid = val2;
		console.log(val3);
		this.appid = val2;
		this.appbool = true;
		
    	this.http.post(envin + '/commerce/getObjectives',{token: localStorage.getItem('tokenbranch'),
    	 pid: this.appid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.objarr11 = res.result;
    });
	}
	close_app(){
		this.appbool = false;
	}


  ngOnInit() {
  }

}
