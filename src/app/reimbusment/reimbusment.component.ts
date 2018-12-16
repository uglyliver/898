import { Component, OnInit } from '@angular/core';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
import {DataService} from '../data.service';
declare var require: any;
var country_code = require('../../assets/country/country-by-abbreviation.json');
var country_cont = require('../../assets/country/country-by-continent.json');
var country_cur = require('../../assets/country/country-by-currency-name.json');
@Component({
  selector: 'app-reimbusment',
  templateUrl: './reimbusment.component.html',
  styleUrls: ['./reimbusment.component.scss']
})
export class ReimbusmentComponent implements OnInit {
startdate;enddate;
countrybool: boolean = false;
uploadbool: boolean = false;
envin2 = envin;

uploadbool2: boolean = false;
triparr:any[]=[];
afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url: envin + "/commerce/addAppraisalFile",
        headers: {
     "isFile" : '1',
     /*"oid" : this.oid,
     "yid" : this.yid,
     "pid" : this.pid,*/
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'submit',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
	country_val: string = '';
	country_sync: string='';
	country = require('../../assets/country/country-by-continent.json');
	continent: string[] = ['Asia', 'Europe', 'Africa' , 'Oceania', 'North America', 'Antarctica', 'South America'];
  constructor(public http: Http, public data: DataService,) {
  	this.http.post(envin + '/trip/getTrips',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.triparr = res.result
      console.log(res.result);
    });
  setInterval( ()=>{
  this.afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url:envin + "/commerce/addAppraisalFile",
        headers: {
     "isFile" : '1',
     /*"oid" : this.oid,
     "yid" : this.yid,
     "pid" : this.pid,*/
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'submit',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
  },300 )  }
  approve(id){
	this.http.post(envin + '/trip/approveTrip',{token: localStorage.getItem('tokenbranch'),id: id})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/trip/getTrips',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.triparr = res.result
      //console.log(res.result);
    });
    });
}
  
  close_upload(){
		this.uploadbool = false;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	open_upload(){
		this.uploadbool = true;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
open_country(){
	this.countrybool = true;
}
close_country(){
	this.countrybool = false;
	
   let top = document.getElementById('top');
   top.scrollIntoView();
}
sel_country(val){
	this.country_val = val;
	this.close_country();
}
  ngOnInit() {
  }
  filesarr: any[]=[];
open_down(val){
	this.uploadbool = true;
  console.log(val);
	this.filesarr = val.filesR;
}
}
