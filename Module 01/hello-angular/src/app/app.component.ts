import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
  // data (state)
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;


  // actions (methods)
  setKeyword(value: string) {
    console.log('Setting keyword to ', value);
    this.keyword = value;
  }

  search(){
    console.log('search has started');
    this.isBusy = true;
    this.results = [];

    setTimeout(() => {
      console.log('search has completed');
      this.isBusy = false;
      this.results = [
        this.keyword.toUpperCase(), 
        this.keyword.toLowerCase(), 
        `**${this.keyword}**`
      ]
    }, 3000);
  }

}
