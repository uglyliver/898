import { Component, OnInit } from '@angular/core';
import {envin} from '../data.service'; //envin + '/

import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-entities',
  templateUrl: './manage-entities.component.html',
  styleUrls: ['./manage-entities.component.scss']
})
export class ManageEntitiesComponent implements OnInit {
	entarr: any[]=[];
  constructor(public data: DataService, public router: Router, public http: Http) { 
  	//getEntity
  	 this.http.post(envin + '/getEntity',{token: localStorage.getItem('tokenadmin')})
        .map(response => response.json())
        .subscribe(res =>{
          console.log(res);
          this.entarr = res.result;
        });
  }

  ngOnInit() {
  }

}
