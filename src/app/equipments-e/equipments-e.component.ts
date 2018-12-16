import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
@Component({
  selector: 'app-equipments-e',
  templateUrl: './equipments-e.component.html',
  styleUrls: ['./equipments-e.component.scss']
})
export class EquipmentsEComponent implements OnInit {

  constructor(public data: DataService, public http: Http) { 
  this. http.post(envin + '/entity/getempequ',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.equipmentsarre=res.emptype;
     
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
  	this. http.post(envin + '/entity/dropempequ',{token: localStorage.getItem('tokenentity'), name: i})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/entity/getempequ',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.equipmentsarre=res.emptype;
     
    });
    });

  	// this.data.benifitsarr.splice(i, 1);
  	// this.data.benifits = this.data.benifitsarr.toString();
  }
  createequipment(val){
  	//getempben

  	this. http.post(envin + '/entity/addempequ',{token: localStorage.getItem('tokenentity'), name: val})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/entity/getempequ',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.equipmentsarre=res.emptype;
     
    });
    });


  	// this.data.benifitsarr.push(val);
  	// this.data.benifits = this.data.benifitsarr.toString();
  	// //console.log(this.data.benifits);
  }
}
