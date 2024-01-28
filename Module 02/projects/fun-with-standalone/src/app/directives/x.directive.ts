import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.x',
  standalone: true
})
export class XDirective {

  constructor(private host: ElementRef<any>) {
    host.nativeElement.style.backgroundColor='cyan';
  }

}
