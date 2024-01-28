import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StamComponent } from './components/stam/stam.component';
import { OtherComponent } from './components/other/other.component';

@NgModule({
  declarations: [
    StamComponent,
    OtherComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    StamComponent, 
    OtherComponent
  ]
})
export class BModule { }
