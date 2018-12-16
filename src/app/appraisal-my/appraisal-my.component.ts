import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

import * as moment from 'moment';
import { Http } from '@angular/http';

export interface emp {
  name: string,
  email: string,
  id: string,
  pan: string,
  salary: string,
  role: string,
  type: string,
  dob: string,
  joindate: string,
  benefit: string,
  equip: string,
}
@Component({
  selector: 'app-appraisal-my',
  templateUrl: './appraisal-my.component.html',
  styleUrls: ['./appraisal-my.component.scss']
})
export class AppraisalMyComponent implements OnInit {
	yid: any; finbool: boolean = true;apparr: any[]=[];
  today = moment().format('YYYY-MM-DD');
  objarr: any[];
  envin2 = envin;
	descvar: any;
	filesarr: any[];
	oid:any;
	pid: any;
	afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf",
    maxSize: "1",
    uploadAPI:  {
      url: envin + "/commerce/addAppraisalFile",
        headers: {
     "isFile" : '1',
     "oid" : this.oid,
     "yid" : this.yid,
     "pid" : this.pid,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};

	DocUpload(e){

   let top = document.getElementById('top');
   top.scrollIntoView();
		console.log(e);
      for(let v of this.apparr){
      		this.http.post(envin + '/commerce/getObjectives',{token: localStorage.getItem('tokenbranch'), pid: v.id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.tempobj =  res.result;
     this.http.post(envin + '/commerce/getMyAppraisal',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res2 =>{
     console.log(res2);
      for(let v2 of res2.object){
      	for(let v3 of res.result){
      	if(v2.id.oid == v3.id){
      		//return v;
      	v3['temp'] = v2;
    //console.log(this.apparr)
      	}}}	
    });
      v['obj'] = this.tempobj;
    });
      }
	}
	set(val,val2){

    console.log(this.apparr)
		console.log(val,val2);
		this.oid = val;
		this.pid = val2;
		 this.http.post(envin + '/commerce/getMyAppraisal',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.objarr = res.object;
      for(let v of res.object){

      	if(v){

      	}
      	this.filesarr = v.files;
      }
    });

	}
	desc_str: any;
	submit_desc(val,val2,val3){//yid/oid/pid/desc

   let top = document.getElementById('top');
   //top.scrollIntoView();
		console.log(this.yid,val,val2,val3)
		this.http.post(envin + '/commerce/addAppraisal',{token: localStorage.getItem('tokenbranch'),
		isFile: '0', yid: this.yid, oid: val, pid: val2, objectivesDescription: val3, objectivesTitle: val3})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res); //getMyAppraisal
      this.desc_str = res.msg;
      this.http.post(envin + '/commerce/getMyAppraisal',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
    });
    });
      for(let v of this.apparr ){
      		this.http.post(envin + '/commerce/getObjectives',{token: localStorage.getItem('tokenbranch'), pid: v.id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.tempobj =  res.result;
     this.http.post(envin + '/commerce/getMyAppraisal',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res2 =>{
     console.log(res2);
      for(let v2 of res2.object){
      	for(let v3 of res.result){
      	if(v2.id.oid == v3.id){
      		//return v;
      	v3['temp'] = v2;
    //console.log(this.apparr)
      	}}}	
    });
      v['obj'] = this.tempobj;
    });
      }
	}
  emparr: emp;
  constructor(public data: DataService, public http: Http) {
    this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.bio[0]);
      this.emparr=res.bio[0];
    });
  	 this.http.post(envin + '/branch/getyears',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.data.finarr = res.result;
    });
  	this.http.post(envin + '/commerce/getMyAppraisal',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res); //getMyAppraisal
    });
  	var now = moment();
  	this.today = now.format('YYYY-MM-DD');
  	 setInterval( ()=>{
  this.afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "1",
    uploadAPI:  {
      url: envin + "/commerce/addAppraisalFile",
        headers: {
     "isFile" : '1',
     "oid" : this.oid,
     "yid" : this.yid,
     "pid" : this.pid,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};

  },300 )
   }
   tempobj: any;
select_year(val1,val2){

   let top = document.getElementById('top');
   top.scrollIntoView();
	this.yid = val2;
	this.finbool = !this.finbool;
    this.http.post(envin + '/commerce/getPeriod',{token: localStorage.getItem('tokenbranch'), yid: this.yid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.apparr = res.result;
      for(let v of this.apparr ){
      		this.http.post(envin + '/commerce/getObjectives',{token: localStorage.getItem('tokenbranch'), pid: v.id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.tempobj =  res.result;
     this.http.post(envin + '/commerce/getMyAppraisal',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res2 =>{
     console.log(res2);
      for(let v2 of res2.object){
      	for(let v3 of res.result){
      	if(v2.id.oid == v3.id){
      		//return v;
      	v3['temp'] = v2;
    //console.log(this.apparr)
      	}}}	
    });
      v['obj'] = this.tempobj;
    });
      }
    });
}
  ngOnInit() {
  }

}
