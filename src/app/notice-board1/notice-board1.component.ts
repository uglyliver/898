import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {DataService} from '../data.service'
import Swiper from 'swiper';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {envin} from '../data.service'; //envin + '/
import { Http, Headers , RequestOptions} from '@angular/http';
declare var $: any;
import {saveAs as importedSaveAs} from "file-saver";
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx' ;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Response, URLSearchParams, ResponseContentType } from '@angular/http';
@Component({
  selector: 'app-notice-board1',
  templateUrl: './notice-board1.component.html',
  styleUrls: ['./notice-board1.component.scss']
})
export class NoticeBoard1Component implements OnInit {

//{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  

	title: string='';
	filesarr: any[];
	desc: string='';
	openbool: boolean = true;
	afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif",
    maxSize: "15",
    uploadAPI:  {
      url:envin + "/notice/uploadFile",
        headers: {
        	   "title" : this.title,
     "description" : this.desc,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};

  constructor( public http: Http, public data: DataService) {

  	 this.http.post(envin + '/notice/getFiles', {token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.result);
	    	this.filesarr = res.result;
	    }); 
  setInterval( ()=>{
  	this.afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif",
    maxSize: "15",
    uploadAPI:  {
    url:envin + "/notice/uploadFile",
    headers: {
     "title" : this.title,
     "description" : this.desc,
     "token" : localStorage.getItem('tokenbranch'),
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
};

  },300 ) }

DocUpload(event){
  console.log(event);
	this.http.post(envin + '/notice/getFiles',{token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.result);
	    	this.filesarr = res.result;
	 }); 
}
Bookbool: boolean = false;
closepdf(){
	this.Bookbool = false;
}
loading: string= '0 bytes Loaded';
onProgress(eve) {
	this.loading = eve.loaded + 'bytes Loaded';
	//console.log(eve);
  // do anything with progress data. For example progress indicator
}
  pdfSrc: string ='';
download(val){
	this.loading = '';
	this.pdfSrc = envin + '/notice/download/' + val;
	this.Bookbool = true;
	}


	delete(id){
		this.http.post(envin + '/notice/dropFile',{token: localStorage.getItem('tokenbranch'), id: id})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	this.http.post(envin + '/notice/getFiles',{token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.result);
	    	this.filesarr = res.result;
	 }); 
	 }); 
	}


  ngOnInit() {
    
 }
}