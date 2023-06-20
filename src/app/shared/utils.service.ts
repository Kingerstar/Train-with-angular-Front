import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  convertNameAndIdToUrl(name: string): string {
    name = name.toLowerCase();
    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    name = name.replaceAll(" ", "-");
    return name;
  }

}
