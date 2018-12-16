import { Component, OnInit, AfterViewChecked} from '@angular/core';
import {DataService} from '../data.service'
import Swiper from 'swiper';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import {FormControl, Validators} from '@angular/forms';
import {envin} from '../data.service'; //envin + '/


import { Http, Headers , RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
declare let paypal: any;
import {packagetype} from '../data.Service';
declare var $: any;

//https://employee-manager202.herokuapp.com/
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: ['@media screen and (min-width: 0px) and (max-width: 600px) {#mobile { display: block;} #desktop { display: none;} #no {display: none;}#shrinkm{transform: scale(0.7);}}@media screen and (min-width: 601px)  {#mobile { display: none; }#desktop { display: block;}#no {display: none;}#shrinkm{transform: scale(1);}}h1 { font-weight: normal; } .rflx {display: flex;flex-direction: row;}.a{color: white !important;}.cflx{display: flex;flex-direction: column;}.swiper-container {min-width: 70vw;max-width:75vw; height: 73vh;}.swiper-container2 {min-width: 100vw;max-width:100vw; height: 73vh;}.slide {height: 95%;width: 75%;background-color: #eceff1;color: black;} ']
})
export class TestComponent implements OnInit, AfterViewChecked {
  email2:string='';
  pass:string='';pass2:string='';
  valid1:boolean=true;
  check2='';
  termsacc='';
   email = new FormControl('', [Validators.required, Validators.email]);
   passval = new FormControl('', [Validators.required]);
getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :'';
  }
  getErrorMessage2() {
    return this.passval.hasError('required') ? 'You must enter a value' :'';
  }
  selcomszval: string = '';
  isLoading: boolean = false;
	cardinitbool: boolean = false;
  curtrialdur: string;check: boolean=false;
	packall: packagetype[];purchasebool:boolean=false;
  pack: string[] = ['dsasdsad','dasdsad','dasdasd']
  auth: string = '';paypalConfig;
  addScript: boolean = false;pid;
  paypalLoad: boolean = true;
  finalAmount: number = 1;
  result:any;
  packid: string;
  featureArray: any[]=[];emailvar=''; pas1='';pas2='';
  constructor(public data: DataService, public http: Http) {
    setInterval(()=>{
      if(this.pas1.length < 6){
      this.pass='(Less than 6 characters)';
      }
    if(this.pas1 != this.pas2){
      this.pass2='(Both Passwords don\'t match)';
    }
      if(this.pas1.length >= 6){
      this.pass='';
      }
    if(this.pas1 == this.pas2){
      this.pass2='';
    }
      if(this.validateEmail(this.emailvar) == false){
           this.email2='(Invalid Email)';
          // this.valid1 = false;
      }
      else if(this.validateEmail(this.emailvar) != false){
           this.email2='';
          // this.valid1 = false;
      }
    },300);
    this.http.get(envin + '/features')
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.featureArray = res.feature;
        });

    this. http.get('https://status-check-status.herokuapp.com/')
    .map(response => response.json())
    .subscribe(res =>{
        this.result = res.result;
        localStorage.setItem('result',res.result); 
        this.result = localStorage.getItem('result');
    }); 
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('tokenadmin') );
    const optionss = new RequestOptions({headers: headers});

    this.http.get(envin + '/smtp', optionss)
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.check = true;
      this.auth = res.paypal1;
      this.paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: this.auth,
      production: this.auth
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        console.log(payment.success);
        if(payment.success){
          this.purbool = true;
        }
     })
    }
  };
    });
  }
  packarr: any[]=[]
  selcomsz(val){
    this.selcomszval = val;
  }
  close_try(){
    this.data.tryfreebool = false;
  }
  switch_trybool(obj,feat, pid){
    console.log(pid);
    this.pid = pid;
    console.log(feat);
     for(let v of feat.split('**')){
      for( let b of this.featureArray){
        if(v==b.name){
          this.packarr.push(b.id);
        }
      }
    }
    this.packid = this.packarr.join('**');
    console.log(this.packid);
    this.data.tryfreebool = !this.data.tryfreebool;
    if(obj != null){
      console.log(obj);
      this.curtrialdur=obj.trialdur;
    }
  }
  mssg: string = '';

  validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
  reg2(obj){
    console.log(this.termsacc);
    this.valid1 = true;this.mssg='';
    this.pass='';this.email2='';this.pass2='';

    if(this.validateEmail(obj.email) == false){
      this.email2='(Invalid Email)';
      this.valid1 = false; 
    }
    if(obj.password.length < 6){
      this.pass='(Less than 6 characters)';
      this.valid1 = false;
    }
    if(obj.password != obj.pass2){
      this.pass2='(Both Passwords don\'t match)';
      this.valid1 = false;
    }
    if(this.valid1){
    this. http.post(envin + '/entity/register',
      {address: obj.address, name: obj.name,email: obj.email, password: obj.password,countryName: obj.countryName, phone: obj.phone,pid: this.pid
      ,registration: obj.registration,fundingName: obj.fundingName,minUser: obj.minUser, size: obj.size, packid: this.packid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res)
        this.mssg = res.msg;
       });
    }
  }
  termbool:boolean = false;
  openterm(){
    this.termbool = !this.termbool;
  }

  reg(obj){
    this.valid1 = true;
    this.pass='';this.email2='';this.pass2='';
    if(this.validateEmail(obj.email) == false){
      this.email2='(Invalid Email)';
      this.valid1 = false; 
    }if(obj.password.length < 6){
      this.pass='(Less than 6 characters)';
      this.valid1 = false;
      
    }if(obj.password != obj.pass2){
      this.pass2='(Both Passwords don\'t match)';
      this.valid1 = false;
    }
     if(this.valid1){
    this.mssg='';
    this. http.post(envin + '/entity/register',
      {address: obj.address, name: obj.name,email: obj.email, password: obj.password,countryName: obj.countryName, phone: obj.phone
      ,registration: obj.registration,fundingName: obj.fundingName,minUser: obj.minUser, size: obj.size, packid: this.packid, pid: this.pid})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res)
        this.mssg = res.msg;
       }); }
  }
  open_purchase(val,feat,pid){
    this.pid = pid;
    for(let v of feat.split('**')){
      for( let b of this.featureArray){
        if(v==b.name){
          this.packarr.push(b.id);
        }
      }
    }
    this.packid = this.packarr.join('**');
    console.log(this.packid);

   // this.packid = i;
    this.finalAmount = val;
    console.log(this.finalAmount);
    this.purchasebool = true;
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  close_purchase(){
    this.purchasebool = false;
  }

  ngOnInit() {

   // this.packall = this.data.packagesall;
  
    this.http.get(envin + '/package')
    .map(response => response.json())
    .subscribe(res =>{this.packall = res.package;
      setTimeout(function(){
          $('.mobsc').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });
       $('.desksc').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    }); }, 0.01);
   
    });

   this.cardinitbool = true;

  }
  purbool: boolean = false;
/*  this.paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: this.auth,
      production: this.auth
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        console.log(payment.success);
        if(payment.success){
          this.purbool = true;
        }
     })
    }
  };*/
 
  ngAfterViewChecked(): void {

  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
 

   

}
