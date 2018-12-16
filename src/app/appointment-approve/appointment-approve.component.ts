import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {DataService} from '../data.service';
import {packagetype} from '../data.Service';
import { Router } from '@angular/router';
import {envin} from '../data.service'; //envin + '/
@Component({
  selector: 'app-appointment-approve',
  templateUrl: './appointment-approve.component.html',
  styleUrls: ['./appointment-approve.component.scss']
})
export class AppointmentApproveComponent implements OnInit {

  constructor(public data: DataService, public http : Http) { }

  ngOnInit() {
  }

}
