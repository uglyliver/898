import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

  constructor(public data: DataService, public http: Http) { 
   this. http.post(envin + '/branch/getempequ',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.equipmentsarr=res.emptype;
    });}

  ngOnInit() {
  }
 /* del(i){
  	this.data.equipmentsarr.splice(i, 1);
  	this.data.equipments = this.data.equipmentsarr.toString();
  }
   createequipment(val){
  	this.data.equipmentsarr.push(val);
  	this.data.equipments = this.data.equipmentsarr.toString();
  	//console.log(this.data.benifits);
  }*/

   del(i){
  	this. http.post(envin + '/branch/dropempequ',{token: localStorage.getItem('tokenbranch'), name: i})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/branch/getempequ',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.equipmentsarr=res.emptype;
     
    });
    });

  	// this.data.benifitsarr.splice(i, 1);
  	// this.data.benifits = this.data.benifitsarr.toString();
  }
  createequipment(val){
  	//getempben

  	this. http.post(envin + '/branch/addempequ',{token: localStorage.getItem('tokenbranch'), name: val})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/branch/getempequ',{token: localStorage.getItem('tokenbranch')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.equipmentsarr=res.emptype;
     
    });
    });


  	// this.data.benifitsarr.push(val);
  	// this.data.benifits = this.data.benifitsarr.toString();
  	// //console.log(this.data.benifits);
  }
}
