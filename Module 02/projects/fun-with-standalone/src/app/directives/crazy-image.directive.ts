import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img',
  standalone: true
})
export class CrazyImageDirective {

  @Input('src')
  @HostBinding('attr.title')
  url: string = '';

  constructor() { }

}
