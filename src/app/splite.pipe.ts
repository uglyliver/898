import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splite'
})
export class SplitePipe implements PipeTransform {

  transform(val:string):string[] {
    return val.split('**');
  }

}
