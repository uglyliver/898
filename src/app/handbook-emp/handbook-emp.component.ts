import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers, URLSearchParams, RequestOptions, ResponseContentType } from '@angular/http';
import {envin} from '../data.service'; //envin + '/

import {DataService} from '../data.service';
@Component({
  selector: 'app-handbook-emp',
  templateUrl: './handbook-emp.component.html',
  styleUrls: ['./handbook-emp.component.scss']
})
export class HandbookEmpComponent implements OnInit {

	title: string='';
	filesarr: any[];
	desc: string='';
	openbool: boolean = true;

  constructor( public http: Http, public data: DataService) {

  	 this.http.post(envin + '/file/getFiles', {token: localStorage.getItem('tokenbranch')})
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
}
  pdfSrc: string ='';
download(val){
	this.loading = '';
	this.pdfSrc = envin + '/file/download/' + val;
	this.Bookbool = true;
	}

  ngOnInit() {
    
 }
}
