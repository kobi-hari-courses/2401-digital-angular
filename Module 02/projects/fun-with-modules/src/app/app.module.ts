import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BModule } from './b/b.module';
import { AModule } from './a/a.module';
import { MY_NUMBER } from './my-number.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AModule
  ],
  providers: [
    {provide: MY_NUMBER, useValue: 42}, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
