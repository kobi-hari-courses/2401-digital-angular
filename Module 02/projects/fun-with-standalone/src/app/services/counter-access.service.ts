import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterAccessService {
  counter = 0;

  isAllowed() {
    this.counter++;
    console.log('Access Service ', this.counter);
    return of(this.counter < 4).pipe(delay(1000));
  }

  constructor() { }
}
