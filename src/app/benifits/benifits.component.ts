import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-benifits',
  templateUrl: './benifits.component.html',
  styleUrls: ['./benifits.component.scss']
})
export class BenifitsComponent implements OnInit {

  constructor(public data : DataService, public http: Http) {
   this. http.post(envin + '/branch/getempben',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.benifitsarr=res.emptype;
     
    }); }

  ngOnInit() {
  }
  del(i){
  	this. http.post(envin + '/branch/dropempben',{token: localStorage.getItem('tokenbranch'), name: i})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/branch/getempben',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.benifitsarr=res.emptype;
     
    });
    });

  	// this.data.benifitsarr.splice(i, 1);
  	// this.data.benifits = this.data.benifitsarr.toString();
  }
  createbenefit(val){
  	//getempben

  	this. http.post(envin + '/branch/addempben',{token: localStorage.getItem('tokenbranch'), name: val})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/branch/getempben',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.benifitsarr=res.emptype;
     
    });
    });


  	// this.data.benifitsarr.push(val);
  	// this.data.benifits = this.data.benifitsarr.toString();
  	// //console.log(this.data.benifits);
  }
}
