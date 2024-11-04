import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByName' })
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], searchText: string): any[] {
    return products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
