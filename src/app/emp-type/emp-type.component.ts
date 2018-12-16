import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import {DataService} from '../data.service';
@Component({
  selector: 'app-emp-type',
  templateUrl: './emp-type.component.html',
  styleUrls: ['./emp-type.component.scss']
})
export class EmpTypeComponent implements OnInit {

  constructor(public http: Http, public data: DataService) {
  
    }
  
  ngOnInit() {
  }

}
