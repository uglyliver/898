import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {envin} from '../data.service'; //envin + '/


@Component({
  selector: 'app-entityverify',
  templateUrl: './entityverify.component.html',
  styleUrls: ['./entityverify.component.scss']
})
export class EntityverifyComponent implements OnInit {
	verify_bool: boolean;
	verify_msg: string;
    constructor(private route: ActivatedRoute, public http: Http) {    
  	route.params.subscribe(res => {
  		console.log(res.id);
  		this. http.post(envin + '/entity/verify',{token: res.id})
    .map(response => response.json())
    .subscribe(res =>{
    	if(res.success)this.verify_bool = true;
    	console.log(res);
    });

  	}); 	  	
  	
  }

  ngOnInit() {
  }

}
