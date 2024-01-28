import { NgModule, Type } from '@angular/core';
import { CrazyImageDirective } from './directives/crazy-image.directive';
import { XDirective } from './directives/x.directive';
import { MyLinkDirective } from './directives/my-link.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WildButtonComponent } from './components/wild-button/wild-button.component';

const all = [
  MyLinkDirective,
  CrazyImageDirective,
  XDirective,
  CommonModule,
  RouterModule,
  WildButtonComponent
] as const;

@NgModule({
  imports: [...all],
  exports: [...all],
})
export class SharedModule {}
