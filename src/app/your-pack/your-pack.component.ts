import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import { Router } from '@angular/router'; 

import {envin} from '../data.service'; //envin + '/

import {packagetype} from '../data.Service';
@Component({
  selector: 'app-your-pack',
  templateUrl: './your-pack.component.html',
  styleUrls: ['./your-pack.component.scss']
})
export class YourPackComponent implements OnInit {
packall:any[]=[];pid;pack:any;booll: boolean = false;
  constructor( public http: Http, public data: DataService, private router: Router) {

    this.http.post(envin + '/entity/bio',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);

		    	this.pid = res.bio[0].package;
		    	
   this.http.get(envin + '/package')
    .map(response => response.json())
    .subscribe(res =>{this.packall = res.package;
    	for(let a of this.packall){
    		if(a.id == this.pid){
    			this.pack = a;
          this.booll = true;
    		}
    	}
   	
    }); 
		    });

}
close(){
	this.http.post(envin + '/entity/drop',{token: localStorage.getItem('tokenentity')})
		    .map(response => response.json())
		    .subscribe(res =>{
		    	console.log(res);
          if(res.success == true){
            this.router.navigate(['']);
          }
		    });
}

  ngOnInit() {
  }

}
