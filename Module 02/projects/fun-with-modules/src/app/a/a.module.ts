import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BModule } from '../b/b.module';
import { MY_NUMBER } from '../my-number.token';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    BModule, 
  ], 
  exports: [
    BModule
  ], 
  providers: [
    {provide: MY_NUMBER, useValue: 50}
  ]
})
export class AModule { }
