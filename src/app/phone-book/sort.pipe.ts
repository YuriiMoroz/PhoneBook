import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: IContact[], type: boolean, item: string): IContact[] {
    if (!arr) return [];
    if (item == 'name') {
      if (type) {
        return arr.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0))
      }
      return arr.sort((a, b) => (a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0))
    } else if(item=='surname'){
      if (type) {
        return arr.sort((a, b) => (a.surname > b.surname) ? 1 : ((a.surname < b.surname) ? -1 : 0))
      }
      return arr.sort((a, b) => (a.surname < b.surname) ? 1 : ((a.surname > b.surname) ? -1 : 0))
    }else if(item=='number'){
      if (type) {
        return arr.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0))
      }
      return arr.sort((a, b) => (a.number < b.number) ? 1 : ((a.number > b.number) ? -1 : 0))
    }
    else{
      return arr;
    }

}
}
