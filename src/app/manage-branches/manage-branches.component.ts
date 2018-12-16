import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-branches',
  templateUrl: './manage-branches.component.html',
  styleUrls: ['./manage-branches.component.scss']
})
export class ManageBranchesComponent implements OnInit {
	@ViewChild('name') myId: ElementRef; zonemsg='';zonemsg2='';
	@ViewChild('name2') myId2: ElementRef;
  crbranchbool: boolean = false;
  editbranchbool: boolean = false;
  zonebool: boolean = false;
  zonebool2: boolean = false;
  selzone: string;
  selzon: string;
  i: number;result:any;
  constructor(public data: DataService, public router: Router, public http: Http) {
  	if(!localStorage.getItem('tokenentity')){
   	this.router.navigate(['']);
  		} 
      this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    }); 
  	this. http.post(envin + '/entity/getAllBranch',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res.result);
    	this.data.brancharray = res.result;
    });
	}
  open_zone2(val){
  	if(val=='2'){
  	this.selzon = this.data.brancharray[this.i].timezone;
  	this.zonebool2 = !this.zonebool2;
  		} 
  	if(val == '1') {
  	this.zonebool = !this.zonebool;
  		}
  	this.crbranchbool = !this.crbranchbool;
  	localStorage.setItem('worldzone','1');
  }
  open_zone(val){
  	if(val=='1'){
  		this.selzone = this.myId.nativeElement.innerText;
	  	this.zonebool = !this.zonebool;
  	}

  	if(val==2){
  		console.log(this.myId2.nativeElement.innerText);
  		this.selzon = this.myId2.nativeElement.innerText;
	  	this.zonebool2 = !this.zonebool2;
  	}
  	this.crbranchbool = !this.crbranchbool;
  }


  //brancharray: any[] = [];

  gobacktocr(){
  	this.crbranchbool = !this.crbranchbool
  }
  ngOnInit() {
  }
  del(id)
  {
  	this. http.post(envin + '/entity/dropBranch',{token: localStorage.getItem('tokenentity'), id: id})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/entity/getAllBranch',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res.result);
		    	this.data.brancharray = res.result;
		    });
    });
  }
  open_edit(ind){
  	this.i = ind;
  	this.editbranchbool = !this.editbranchbool;
  }
  submit_edit(obj){

    this.zonemsg2='';
    var bol = false;
    if(obj.timezone == null || obj.timezone == ''  || obj.timezone == undefined ){
      this.zonemsg2 = '(No Timezone Selected)';
      bol = true;
    }

    if(bol == false){
  		this. http.post(envin + '/entity/updateBranch',{token: localStorage.getItem('tokenentity'),name:obj.name, address: obj.address,id: obj.id, timezone: obj.timezone})
    .map(response => response.json())
    .subscribe(res =>{
    	console.log(res);
    	this. http.post(envin + '/entity/getAllBranch',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res.result);
		    	this.data.brancharray = res.result;
		    });
    	if(res.success)this.open_edit(0);
    });}
  }
  submit_cr_br(obj){
    this.zonemsg='';
    var bol = false;
    if(obj.timezone == null || obj.timezone == ''  || obj.timezone == undefined ){
      this.zonemsg = '(No Timezone Selected)';
      bol = true;
    }
    if(bol == false){
      this. http.post(envin + '/entity/createBranch',{token: localStorage.getItem('tokenentity'),name:obj.name, address: obj.address, timezone: obj.timezone})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this. http.post(envin + '/entity/getAllBranch',{token: localStorage.getItem('tokenentity')})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res.result);
          this.data.brancharray = res.result;
        });
      if(res.success)this.gobacktocr();
    });
    }
  	
  }
}
