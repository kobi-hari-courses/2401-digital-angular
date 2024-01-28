import { Directive } from '@angular/core';

@Directive({
  selector: '[MyLink]',
  standalone: true
})
export class MyLinkDirective {

  constructor() {console.log('My Link was created') }

}
