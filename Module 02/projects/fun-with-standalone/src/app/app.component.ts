import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MY_NUMBER } from './my-number.token';
import { HttpClient } from '@angular/common/http';
import { SomethingForLaterComponent } from './components/something-for-later/something-for-later.component';
import { MyLinkDirective } from './directives/my-link.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SomethingForLaterComponent, MyLinkDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  myNumber = inject(MY_NUMBER);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('www.walla.co.il');
  }


}
