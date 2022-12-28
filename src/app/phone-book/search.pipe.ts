import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './phone-book.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: IContact[], search: string): IContact[] {
    if(!arr) return [];
    if(!search) return arr;
    return arr.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())||
    contact.surname.toLocaleLowerCase().includes(search.toLocaleLowerCase())||
    contact.number.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
