import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.css'
})
export default class PageBComponent {
  flag = Math.random() > 0.5;

}
