import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from "file-saver";
import {envin} from '../data.service'; //envin + '/

import { HttpHeaders } from '@angular/common/http';
import {DataService} from '../data.service';
import 'rxjs/Rx' ;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response, Headers, URLSearchParams, RequestOptions, ResponseContentType } from '@angular/http';
@Component({
  selector: 'app-hand-book-hr',
  templateUrl: './hand-book-hr.component.html',
  styleUrls: ['./hand-book-hr.component.scss']
})
export class HandBookHrComponent implements OnInit {

//{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  

	title: string='';
	filesarr: any[];
	desc: string='';
	openbool: boolean = true;
	afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf",
    maxSize: "15",
    uploadAPI:  {
      url:envin + "/file/uploadFile",
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

  	 this.http.post(envin + '/file/getFiles', {token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.result);
	    	this.filesarr = res.result;
	    }); 

  setInterval( ()=>{
  	this.afuConfig = {
    multiple: false,
    formatsAllowed: ".pdf",
    maxSize: "15",
    uploadAPI:  {
    url:envin + "/file/uploadFile",
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
	this.http.post(envin + '/file/getFiles',{token: localStorage.getItem('tokenbranch')})
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
	this.pdfSrc = envin + '/file/download/' + val;
	this.Bookbool = true;
	}


	delete(id){
		this.http.post(envin + '/file/dropFile',{token: localStorage.getItem('tokenbranch'), id: id})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	this.http.post(envin + '/file/getFiles',{token: localStorage.getItem('tokenbranch')})
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
