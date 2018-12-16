import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import {envin} from '../data.service'; //envin + '/


@Component({
  selector: 'app-weekly-report-emp',
  templateUrl: './weekly-report-emp.component.html',
  styleUrls: ['./weekly-report-emp.component.scss']
})
export class WeeklyReportEmpComponent implements OnInit {
  reportarr: any[]=[];msg1: string = '';msg2: string = '';msg3: string = '';descvar: string='';
  	title: string = '';startdate;enddate;
	  filearr: any[]=[];
	  envin2 = envin;
  	afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf, .mp3, .jpg, .mp4",
    maxSize: "1",
    uploadAPI:  {
      url: envin + "/commerce/addReportFile",
        headers: {
     "id" : '1',
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};	
DocUpload(E){
console.log(E);
	 	this. http.post(envin + '/commerce/myReports',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.reportarr = res.result;

		    	 this.rarr = Object.keys(this.reportarr).map(i => this.reportarr[i])
		    	for(let v of this.rarr){
		    		if (v.submit == 1){
		    		this.savebool = true; //no save and submit button, add instead
			    }
			    if (v.submit != '1'){
		    		this.savebool = false;
		    		this.descvar = v.description;
		    		this.filearr = v.files;
		    		this.id = v.id;
		    		this.title = v.title;
		    		console.log(this.filearr, this.id);
		    	}
		    	}	
		    });
}
	id:any;
  savebool: boolean = false;	rarr:any[]=[];
  constructor( public http: Http, public data: DataService) {
 	this. http.post(envin + '/commerce/myReports',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.reportarr = res.result;
		    	 this.rarr = Object.keys(this.reportarr).map(i => this.reportarr[i])
		    	console.log(this.reportarr);
		    	if(this.reportarr.length != 0){
		    	for(let v of this.rarr){
		    		if (v.submit != '0'){
		    		this.savebool = true; //no save and submit button, add instead
			    }
			    if (v.submit == '0'){
		    		this.savebool = false;
		    		this.descvar = v.description;
		    		this.filearr = v.files;
		    		this.id = v.id;
		    		this.title = v.title;
		    		console.log(this.filearr, this.id);
		    	}
		    	}}
		    	if(this.reportarr.length == 0){
		    		this.savebool = true;
		    	}
		    console.log(this.savebool); 	
		    });
		   
			console.log(this.rarr);
		setInterval(()=>{
				this.afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf, .mp3, .jpg, .mp4",
    maxSize: "1",
    uploadAPI:  {
      url: envin + "/commerce/addReportFile",
        headers: {
     "id" : this.id,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
		},300 );

		}
  ngOnInit() {
  }
  add(val,val1){
  	 	this. http.post(envin + '/commerce/addReport',{token: localStorage.getItem('tokenbranch'),title: val, description: val1})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	if(res.success == true)this.savebool = !this.savebool;

		    	this.msg3 = res.msg;
		    	this.msg1 = '';
		    	this.msg2 = '';
		   		 	this. http.post(envin + '/commerce/myReports',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.reportarr = res.result;

		    	 this.rarr = Object.keys(this.reportarr).map(i => this.reportarr[i])
		    	for(let v of this.rarr){
		    		if (v.submit == 1){
		    		this.savebool = true; //no save and submit button, add instead
			    }
			    if (v.submit != '1'){
		    		this.savebool = false;
		    		this.descvar = v.description;
		    		this.filearr = v.files;
		    		this.id = v.id;
		    		this.title = v.title;
		    		console.log(this.filearr, this.id);
		    	}
		    	}	
		    }); 	
		    });
  }
  weekbool: boolean = true;
  close_week(){
  	this.weekbool = false;
  }
  save(val, val1){
  	 	this. http.post(envin + '/commerce/updateReport',{token: localStorage.getItem('tokenbranch'),title: val, description: val1})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.msg1 = res.msg;
		    	this.msg2 = '';
		    	this.msg3 = '';
		   		 	this. http.post(envin + '/commerce/myReports',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);

		    	this.reportarr = res.result;

		    	 this.rarr = Object.keys(this.reportarr).map(i => this.reportarr[i])
		    	for(let v of this.rarr){
		    	if (v.submit == 1){
		    		this.savebool = true; //no save and submit button, add instead
			    }
			    if (v.submit != '1'){
		    		this.savebool = false;
		    		this.descvar = v.description;
		    		this.filearr = v.files;
		    		this.id = v.id;
		    		this.title = v.title;
		    		console.log(this.filearr, this.id);
		    	}
		    	}
		    }); 	
		    });
  }

  submit(val,val1){
  	this. http.post(envin + '/commerce/submitReport',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);

if(res.success == true){
		    		this.savebool = !this.savebool;
		    	}
		    	this.msg2 = res.msg;
		    	this.msg1 = '';
		    	this.msg3 = '';

		   		 	this. http.post(envin + '/commerce/myReports',{token: localStorage.getItem('tokenbranch')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
		    	this.reportarr = res.result;

		    	 this.rarr = Object.keys(this.reportarr).map(i => this.reportarr[i])
		    	for(let v of this.rarr){
		    		if (v.submit == 1){
		    		this.savebool = true; //no save and submit button, add instead
			    }
			    if (v.submit != '1'){
		    		this.savebool = false;
		    		this.descvar = v.description;
		    		this.filearr = v.files;
		    		this.id = v.id;
		    		this.title = v.title;
		    		console.log(this.filearr, this.id);
		    	}
		    	}	
		    }); 	
		    });
  }
}
