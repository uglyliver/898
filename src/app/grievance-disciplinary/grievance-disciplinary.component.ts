import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin2 + '/



@Component({
  selector: 'app-grievance-disciplinary',
  templateUrl: './grievance-disciplinary.component.html',
  styleUrls: ['./grievance-disciplinary.component.scss']
})
export class GrievanceDisciplinaryComponent implements OnInit {
discbool: boolean = false;
comparr: any[]=[];startdate;enddate;
filesarr2: any[];
envin2 = envin;
emparr:any[]=[];

  comparr2:any[]=[];
uploadbool: boolean=false;
uploadbool2: boolean = false;
	close_upload(){
		this.uploadbool = false;
		this.discbool = false;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	open_upload(){
		this.uploadbool = true;
		this.discbool = false;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	open_disc(feat){

		this.compid = feat.id;
		this.discbool = true;
		this.uploadbool = false;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	close_disc(){
		this.discbool = false;
		this.uploadbool = false;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	approved(){

	}
	pending(){
		
	}
	open_upload2(val){
		this.filesarr2 = val.files;
		this.uploadbool2 =true;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	close_upload2(){
		this.uploadbool2 = false;

   let top = document.getElementById('top');
   top.scrollIntoView();
	}
	compid:any;
	approve(val){
		this.compid = val;
    this. http.post(envin + '/commerce/respondCompHr',{token: localStorage.getItem('tokenbranch'),id: val})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       this. http.post(envin + '/commerce/Complaints',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
    	this.comparr =[];
      console.log(res);
       for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
        this.comparr.push(res.obj[key]);
    	}}

    this.comparr2=Array.from(this.comparr);
    });
    });

	}
   idtoname(id) : string{
    for(let val of this.emparr){
      if(val.id == id)return val.name;
    }
  }
  set_it(val){
    this.comparr2=[];
    if(val==1){
      for(let a of this.comparr){
        if(a.type == 'grievance'){//disciplinary
          this.comparr2.push(a);
        }
      }
    }
     if(val==2){
      for(let a of this.comparr){
        if(a.type == 'disciplinary'){//disciplinary
          this.comparr2.push(a);
        }
      }
    }
  }
	submit_outcome(val,val2){
		//respondCompHrOutcome

    this.http.post(envin + '/commerce/respondCompHrOutcome',{token: localStorage.getItem('tokenbranch'),id: this.compid, outcome: val2})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       this. http.post(envin + '/commerce/Complaints',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
    	this.comparr =[];
      console.log(res);
       for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
        this.comparr.push(res.obj[key]);
    	}}
    this.comparr2=Array.from(this.comparr);
    });
    });

    this.close_disc();
	}
  constructor(public http: Http, public data: DataService) {
    this. http.post(envin + '/branch/getAllEmployees',{token: localStorage.getItem('tokenbranch')})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.emparr = res.result;
        });
    	this.comparr =[];
  	//Complaints//respondCompHr
    this. http.post(envin + '/commerce/Complaints',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
       for (var key in res.obj) {
    if (res.obj.hasOwnProperty(key)) {
        this.comparr.push(res.obj[key]);
    	}}

    this.comparr2=Array.from(this.comparr);
    });
 }
  DocUpload(e){
  	console.log(e);
  }
  ngOnInit() {
  }

}
