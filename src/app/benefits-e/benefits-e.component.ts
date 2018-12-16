import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {envin} from '../data.service'; //envin + '/

@Component({
  selector: 'app-benefits-e',
  templateUrl: './benefits-e.component.html',
  styleUrls: ['./benefits-e.component.scss']
})
export class BenefitsEComponent implements OnInit {

  constructor(public data : DataService, public http: Http) {
  http.post(envin + '/entity/getempben',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
   	data.benifitsarre=res.emptype;
    }); }

  ngOnInit() {
  }
  del(i){
  	this. http.post(envin + '/entity/dropempben',{token: localStorage.getItem('tokenentity'), name: i})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/entity/getempben',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.benifitsarre=res.emptype;
    });
    });

  	// this.data.benifitsarr.splice(i, 1);
  	// this.data.benifits = this.data.benifitsarr.toString();
  }
  createbenefit(val){
  	//getempben
  	this. http.post(envin + '/entity/addempben',{token: localStorage.getItem('tokenentity'), name: val})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this. http.post(envin + '/entity/getempben',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
     this.data.benifitsarre=res.emptype;
    });
    });
  }

}
