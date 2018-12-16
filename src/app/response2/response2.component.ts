import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-response2',
  templateUrl: './response2.component.html',
  styleUrls: ['./response2.component.scss']
})
export class Response2Component implements OnInit {
startdate;enddate;
  discbool: boolean = false;discbool2: boolean = false;
  envin2 = envin;emp_sync='';
	switchbool: boolean = false;
	switchbool2: boolean = false;
	empbool: boolean = true;
	compagarr: any[]=[];
	uploadbool2: boolean = false;uploadbool3: boolean = false;
	filesarr2: any[]=[];filesarr3: any[]=[];
	uploadbool: boolean=false;
	comparr: any[]=[];
	filesarr: any[];
	insertId: any ;
	eid2: string;
	i2: any;emparr:any[]=[];
afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url:envin + "/commerce/addCompFile",
        headers: {
     "id" : this.insertId,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'UPLOAD',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
afuConfig2 = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url:envin + "/commerce/respondCompFile",
        headers: {
     "id" : this.i2,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'UPLOAD',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
	idtoname(id) : string{
    for(let val of this.emparr){
      if(val.id == id)return val.name;
    }
  }
	open_upload2(val){
		console.log(val);
		this.filesarr2 = val.files
		this.uploadbool2 = true;
   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	close_upload2(){
		this.uploadbool2 = false;
   let top = document.getElementById('top');
   top.scrollIntoView();
	}

	close_upload(){
		this.uploadbool = false;
		this.discbool = false;
		this.comparr=[];
		this. http.post(envin + '/commerce/getMyComp',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
        this.comparr.push(res.obj[key]);
    	}}
    	console.log(res.obj);
    });
     let top = document.getElementById('top');
   top.scrollIntoView();
	}
	open_upload(val1,val2){//addComp

	 this. http.post(envin + '/commerce/addComp',{token: localStorage.getItem('tokenbranch'), type: 'disciplinary', actionType: val1, reasonse: val2, eid2: this.eid2})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
   		this.insertId = res.result.insertId;
   		console.log(this.insertId);
   		this. http.post(envin + '/commerce/getMyComp',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      for(let v of res.obj){
      if(v.id == this.insertId){
      this.filesarr =  v.files;}}
    	});
    });
    	this.uploadbool = true;
    	this.discbool = false;
   let top = document.getElementById('top');
   top.scrollIntoView();
	}
 // i2 comp id for  justification
	open_disc2(val){
		this.i2 = val;
		this.discbool2 = true;
		this.uploadbool = false;
		let top = document.getElementById('top');
   		top.scrollIntoView();
	}
	close_just(){
		this.discbool2=false;
	}
	submit_just(val){
		this.http.post(envin + '/commerce/respondComp',{token: localStorage.getItem('tokenbranch'),
			id: this.i2, reasons: val})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       this. http.post(envin + '/commerce/getMyCompAg',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.compagarr=[];
      for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
        this.compagarr.push(res.obj[key]);
    	}
	}
    });
    });
    this.discbool2 = false;
	}

	open_disc(val){
		this.eid2 = val;
		this.discbool = true;
		this.uploadbool = false;
		let top = document.getElementById('top');
   top.scrollIntoView();
	}
	close_disc(val){
		this.discbool = false;
		this.uploadbool = false;
		let top = document.getElementById('top');
   top.scrollIntoView();
	}
	brancharray: any[]=[];
	set_emp(){
		this.empbool = true;
		this.switchbool = false;
		this.switchbool2 = false;
	}set_switch(){
		this.empbool = false;
		this.switchbool = true;
		this.switchbool2 = false;
	}set_switch2(){
		this.empbool = false;
		this.switchbool = false;
		this.switchbool2 = true;
	}
  constructor(public http: Http, public data: DataService,) {
    this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.emparr = res.result;
        });
  	this.http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.brancharray = res.result;
    });
    this. http.post(envin + '/commerce/getMyCompAg',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
        this.compagarr.push(res.obj[key]);
    	}
	}
    });
    this. http.post(envin + '/commerce/getMyComp',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
        this.comparr.push(res.obj[key]);
    	}
	}
	console.log(res.obj);
    });

  setInterval( ()=>{
  	 this.afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf,.doc,.xls,.ppt,.mp3,.mp4,.jpg",
    maxSize: "2",
    uploadAPI:  {
      url:envin + "/commerce/addCompFile",
        headers: {
     "id" : this.insertId,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'UPLOAD',
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
      url:envin + "/commerce/respondCompFile",
        headers: {
     "id" : this.i2,
     /*"oid" : this.oid,
     "yid" : this.yid,
     "pid" : this.pid,*/
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    uploadBtnText: 'UPLOAD',
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};
  },300 ) }
    DocUpload(e){
  	console.log(e);
  	this. http.post(envin + '/commerce/getMyComp',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.filesarr = res.obj[this.insertId].files;
    	});
  }DocUpload2(e){
  	console.log(e);
  }
  ngOnInit() {
  }

}
