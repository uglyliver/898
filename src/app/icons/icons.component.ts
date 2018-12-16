import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  packagearr: any[]=[];featureArray: any[]=[];
  crpackbool: boolean = false;
  featureArray2: any[]=[];featureArray3: any[]=[];
  edfeatarr:any[]=[];crfeatarr:any[]=[];
  editpackbool: boolean = false;
  cur_pack: any = {
    name: '',
    trialdur: '',
    minusers: '',
    pricepermonth: '',
    priceperyear: '',
    features: '',
    description: '',
  } 
  cur_pack2: any = {
    name: '',
    trialdur: '',
    minusers: '',
    pricepermonth: '',
    priceperyear: '',
    features: '',
    description: '',
  }
  id_ed: any;dfeature:any[]=[];
  editpackage(obj){
       this.http.post(envin + '/packageupdate',{token: localStorage.getItem('tokenadmin'),id: this.id_ed,
         name: this.cur_pack2.name, trialdur: this.cur_pack2.trialdur, minusers: this.cur_pack2.minusers,
         pricepermonth: this.cur_pack2.pricepermonth, priceperyear: this.cur_pack2.priceperyear,description: this.cur_pack2.description,
         features: this.dfeature.map(e => e.name).join('**') })
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
           this.http.get(envin + '/package')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.packagearr = res.package;
          this.gobacktoedit2();
        });
        });
   }

   addfeat(val){
     var ind = this.crfeatarr.indexOf(val);
      this.crfeatarr.splice(ind,1);

     this.featureArray2.push(val);
   }
   addfeat2(val){

     var obj = this.featureArray2[val];
     this.crfeatarr.push(obj);

     this.featureArray2.splice(val,1);
   }
    addfeat3(val){//remove val from edfeatarr
      var ind = this.edfeatarr.indexOf(val);
      this.edfeatarr.splice(ind,1);

     this.dfeature.push(val);
   }
   addfeat4(val){
     var obj = this.dfeature[val];
     this.edfeatarr.push(obj);
     this.dfeature.splice(val,1);
   }
   addpackage(obj){
       this.http.post(envin + '/packageadd',{token: localStorage.getItem('tokenadmin'),
         name: this.cur_pack.name, trialdur: this.cur_pack.trialdur, minusers: this.cur_pack.minusers,
         pricepermonth: this.cur_pack.pricepermonth, priceperyear: this.cur_pack.priceperyear,description: this.cur_pack.description,
         features: this.featureArray2.map(e => e.name).join('**') })
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
           this.http.get(envin + '/package')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.packagearr = res.package;
          this.gobacktocr();
        });
        });
   }
gobacktoedit2(){
this.dfeature=[];
this.edfeatarr = [];
  this.editpackbool = false;
}
gobacktoedit(val,val2,val3){
  console.log(this.featureArray.indexOf('helllo'));
  //this.featureArray3 = val3.features.split('**');
  this.dfeature = [];
  for(let v of val3.features.split('**')){
    for(let b of this.featureArray){
      if(b.name==v)this.dfeature.push(b);
          }
  }
  this.edfeatarr = [];
  for(let a of this.featureArray){
    if(this.dfeature.indexOf(a) == -1){
      this.edfeatarr.push(a);
    }
  }
  if(val != null && val2 != null){
  this.id_ed = val2;
  this.cur_pack2= {
    name: this.packagearr[val].name,
    trialdur: this.packagearr[val].trialdur,
    minusers: this.packagearr[val].minusers,
    pricepermonth: this.packagearr[val].pricepermonth,
    priceperyear: this.packagearr[val].priceperyear,
    features: this.packagearr[val].features,
    description: this.packagearr[val].description,
  }
 // this.featureArray3=[];
}
  this.editpackbool = true;
   }
gobacktocr(){
  this.crfeatarr = this.featureArray;
  this.crpackbool = !this.crpackbool;
  this.featureArray2=[];
}
del(id){
   this.http.post(envin + '/packagedelete',{token: localStorage.getItem('tokenadmin'),id: id})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
           this.http.get(envin + '/package')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.packagearr = res.package;
        });
        });
}
  constructor(public data: DataService, public router: Router, public http: Http ) {
     this.http.get(envin + '/features')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.featureArray = res.feature;
          this.dfeature = res.feature;
        });
          this.http.get(envin + '/package')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.packagearr = res.package;
        });
  }
  ngOnInit() {}
}