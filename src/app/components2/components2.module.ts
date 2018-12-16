import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Footer2Component } from './footer2/footer2.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
@NgModule({
  imports: [
    CommonModule,
     RouterModule,
    NgbModule
  ],
  declarations: [
  	Footer2Component,
    Navbar2Component,
    Sidebar2Component],
  exports: [
    Footer2Component,
    Navbar2Component,
    Sidebar2Component
  ]
})
export class Components2Module { }
