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
import * as moment from 'moment';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx' ;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Response, URLSearchParams, ResponseContentType } from '@angular/http';
@Component({
  selector: 'app-notice-board2',
  templateUrl: './notice-board2.component.html',
  styleUrls: ['./notice-board2.component.scss']
})
export class NoticeBoard2Component implements OnInit {
 	today = moment().format('YYYY-MM-DD');
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
  	 this.http.post(envin + '/notice/getFiles', {token: localStorage.getItem('tokenbranch')})
	    .map(response => response.json())
	    .subscribe(res =>{
	    	console.log(res.result);
	    	this.filesarr = res.result;
	    	for(let a of this.filesarr){
	    		a['src'] = envin + '/notice/download/' + a.id;
	    	}

	    	    setTimeout(function(){
	    	    	var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});
          $('.mobsc').slick({
        accessibility: true,
      infinite: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });
       $('.desksc').slick({
       	pauseOnHover: false,
       	zIndex: 100000,
      accessibility: true,
      infinite: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    }); }, 10);
	    });

 }
}