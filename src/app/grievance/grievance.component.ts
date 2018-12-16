import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/


@Component({
  selector: 'app-grievance',
  templateUrl: './grievance.component.html',
  styleUrls: ['./grievance.component.scss']
})
export class GrievanceComponent implements OnInit {
	switchbool: boolean = false;
	uploadbool: boolean=false;startdate;enddate;
  i2:any;emparr: any[]=[];
  envin2 = envin;

	compagarr:any[]=[];
	filesarr: any[];
	insertId: any ;
	eid2: string;
	afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf",
    uploadBtnText: 'UPLOAD',
    maxSize: "1",
    uploadAPI:  {
      url:envin + "/commerce/addCompFile",
        headers: {
     "id" : this.insertId,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
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
discbool2: boolean = false;
 idtoname(id) : string{
    for(let val of this.emparr){
      if(val.id == id)return val.name;
    }
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
	switch_bool1(){
		this.switchbool = true;
	}switch_bool2(){
		this.switchbool = false;
	}
	open_upload(val1,val2){//addComp

	 this. http.post(envin + '/commerce/addComp',{token: localStorage.getItem('tokenbranch'), type: 'grievance', actionType: val1, reasonse: val2, eid2: this.eid2})
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

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	uploadbool2: boolean = false;
	filesarr2:any[]=[];
	close_upload(){
		this.uploadbool = false;
		this.comparr=[];
		this. http.post(envin + '/commerce/getMyComp',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
       // console.log(key + " -> " + res.obj[key]);
        this.comparr.push(res.obj[key]);
    }
}
      for(let v of res.obj){
      if(v.id == this.insertId){
      this.filesarr =  v.files;}}


    	});

   let top = document.getElementById('top');
   top.scrollIntoView();
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
approved(){

}
pending(){
	
}
  comparr: any[]=[];

  constructor(public http: Http, public data: DataService,) {//getMyCompAg
      this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.emparr = res.result;
        });

  	
        this.http.post(envin + '/branch/bio',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res.bio[0]);
      this.eid2 = res.bio[0].employees2;
       this. http.post(envin + '/branch/getMyManager',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      if(res.success = true)
       this.eid2 = this.eid2 || res.result[0].id;
    });
    });

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

    this.comparr =[];
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

this.afuConfig2 = {
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


  },300 ) }
  DocUpload(e){
  	console.log(e);
  	this. http.post(envin + '/commerce/getMyComp',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.filesarr = res.obj[this.insertId].files;
    	});
  }
DocUpload2(e){
  	console.log(e);
  }
  ngOnInit() {
  }

}
