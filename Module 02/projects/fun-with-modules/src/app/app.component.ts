import { Component, Inject } from '@angular/core';
import { MY_NUMBER } from './my-number.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    @Inject(MY_NUMBER) public myNumber: number
    ){}
}
