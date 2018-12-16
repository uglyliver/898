import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import {DataService} from '../data.service';
@Component({
  selector: 'app-emp-dp',
  templateUrl: './emp-dp.component.html',
  styleUrls: ['./emp-dp.component.scss']
})
export class EmpDpComponent implements OnInit {

  constructor(public http: Http, public data: DataService) { }

  ngOnInit() {
  }

}
