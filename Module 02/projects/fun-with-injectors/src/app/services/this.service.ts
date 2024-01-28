import { Injectable } from '@angular/core';

@Injectable()
export class ThisService {

  id = Math.floor(Math.random() * 10000);

  constructor() {
    console.log('This Service Created');
   }
}
