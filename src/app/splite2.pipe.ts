import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splite2'
})
export class Splite2Pipe implements PipeTransform {

  transform(val:string):string[] {
    return val.split('**');
  }

}
