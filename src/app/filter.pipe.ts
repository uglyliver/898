import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
   transform(val:string):string[] {
    return val.split('**');
  }

}
