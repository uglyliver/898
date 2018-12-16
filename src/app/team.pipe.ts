import { Pipe, PipeTransform } from '@angular/core';

import { Http } from '@angular/http';
import {DataService} from './data.service';
import {packagetype} from './data.Service';
import {envin} from './data.service'; //envin + '/


@Pipe({
  name: 'team'
})
export class TeamPipe implements PipeTransform {
//brancharr2
brancharray:any[]=[];
 constructor(public data: DataService) {

  }
  transform(value: any, args?: any): any {
  	//input arr, return arr with elements only having id from lst idlist

  	 for(let emp of value){
      	for(let id of this.data.idlist){
      		if(emp.id == id && id != null && id!= undefined && id != ''){
      			this.brancharray.push(emp);
      		}
      	}
      }
    return this.brancharray;
  }

}
