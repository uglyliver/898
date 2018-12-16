import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import {DataService} from '../data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(public http: Http, public data: DataService) { }

  ngOnInit() {
  }

}
