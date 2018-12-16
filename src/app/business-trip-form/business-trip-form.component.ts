import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

declare var require: any;
var country_code = require('../../assets/country/country-by-abbreviation.json');
var country_cont = require('../../assets/country/country-by-continent.json');
var country_cur = require('../../assets/country/country-by-currency-name.json');
@Component({
  selector: 'app-business-trip-form',
  templateUrl: './business-trip-form.component.html',
  styleUrls: ['./business-trip-form.component.scss']
})
export class BusinessTripFormComponent implements OnInit {
countrybool: boolean = false;tid:any;cur20:number=0;
envin2 = envin;
startdate;enddate;
uploadbool: boolean = false;
uploadbool2: boolean = false;
triparr: any[];
afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url: envin + "/trip/file",
        headers: {
     "type": '1',
     "id": this.tid,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'submit',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
catarr:any[]=[];rulearr:any[]=[];filesarr: any[]=[];filesarr2: any[]=[];
cur1:any;cur2:number=0;amnt:any=0;datef:any;desc:any;budget:number=0;
afuConfig2 = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url:envin + "/trip/file",
        headers: {
     "type": '2',
     "id": this.tid,
     "currency1": this.cur1,
     "currency2": this.cur2,
     "amount": this.amnt,
     "datef":this.datef,
     "desc" : this.desc,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'submit',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
	it: number=0;
	country_val: string = '';
	country_sync: string='';
	country = require('../../assets/country/country-by-continent.json');
	continent: string[] = ['Asia', 'Europe', 'Africa' , 'Oceania', 'North America', 'Antarctica', 'South America'];
  constructor(public http: Http, public data: DataService,) {
  	 	this.http.post(envin + '/trip/getCategory',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.catarr = res.result;
    });
	this.http.post(envin + '/trip/getRules',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.rulearr = res.result;
      for(let v of this.rulearr){
      	v['val'] = 0;
      }
    });
      this.http.post(envin + '/trip/getMyTrips',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.triparr = res.result
    });
  setInterval( ()=>{
  	this.it++;
  this.afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url: envin + "/trip/file",
        headers: {
     "type": '1',
     "id" : this.tid,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'submit',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
  this.afuConfig2 = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url: envin + "/trip/file",
        headers: {
     "id": this.tid,
     "currency1": this.cur1,
     "currency2": this.cur2,
     "amount": this.amnt,
     "datef":this.datef,
     "desc" : this.desc,
     "type": '2',
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'submit',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
  },300 ) 
}
  DocUpload(e){
  	    this.http.post(envin + '/trip/getMyTrips',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.triparr = res.result
    if(res.success == true){
    	//this.uploadbool=false;
    }
});
  	console.log(this.tid,this.triparr,e);
  }
  close_upload(){
		this.uploadbool = false;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	open_upload(val){
		this.uploadbool = true;
		this.tid = val.trip.id;
		this.filesarr = val.filesA;
   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	DocUpload2(e){
		   this.http.post(envin + '/trip/getMyTrips',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.triparr = res.result
    if(res.success == true){
    	this.uploadbool2=false;
    }
});
  	console.log(e);
  }
  close_upload2(val){
		this.uploadbool2 = false;
   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	open_upload2(val){
		this.uploadbool2 = true;
		this.tid = val.trip.id;
    this.budget = val.trip.estBud;
	this.filesarr2 = val.filesR;
  for(let e of this.filesarr2){
    this.cur20 = this.cur20+parseInt(e.amount || 0);
  }
   let top = document.getElementById('top');
   top.scrollIntoView();
	}
open_country(){
	this.countrybool = true;

   let top = document.getElementById('top');
   top.scrollIntoView();
}
close_country(){
	this.countrybool = false;
	
   let top = document.getElementById('top');
   top.scrollIntoView();
}
f(c){
	console.log(c);
}
sel_country(val){
	this.country_val = val;
	this.close_country();
}
  ngOnInit() {
  }
  submit_trip(obj){
  	this.http.post(envin + '/trip/addTrip',{token: localStorage.getItem('tokenbranch'), currency: obj.currency,
  	budget: obj.budget, country: obj.country, reason: obj.reason, dateDep: obj. dateDep, dateArr: obj.dateArr, visa: obj.visa})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.http.post(envin + '/trip/getMyTrips',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.triparr = res.result
    });
    });
  }
}
