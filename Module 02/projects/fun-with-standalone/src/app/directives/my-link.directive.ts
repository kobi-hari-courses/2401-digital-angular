import { Directive, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Directive({
  selector: '[myLink]',
  standalone: true, 
  hostDirectives: [RouterLinkActive, 
  {
    directive: RouterLink, 
    inputs: [
      'routerLink: myLink'
    ]
  }]
})
export class MyLinkDirective {
  readonly rla = inject(RouterLinkActive);

  constructor() {
    this.rla.routerLinkActive = 'here';
  }

}
