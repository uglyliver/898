import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

import {envin} from '../data.service';
import { Http, Headers , RequestOptions} from '@angular/http';
@Component({
  selector: 'app-personalize-entity',
  templateUrl: './personalize-entity.component.html',
  styleUrls: ['./personalize-entity.component.scss']
})
export class PersonalizeEntityComponent implements OnInit {
	color:any;
	font:any; //[style.font-family]="data.selectedfont"
  constructor(public data : DataService,  public http: Http) {
  this.http.post(envin + '/entity/bio',{token: localStorage.getItem('tokenentity')})
    .map(response => response.json())
    .subscribe(res =>{
      console.log(res);
      this.color = res.bio[0].color;
      this.data.selectedcolor = this.color || 'default';
      this.font = res.bio[0].font;
      this.data.selectedfont = this.font || '\'Montserrat\', sans-serif';
    });
}

  ngOnInit() {
  }

}
