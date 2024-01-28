import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-bug-demo',
  standalone: true,
  imports: [],
  templateUrl: './bug-demo.component.html',
  styleUrl: './bug-demo.component.css'
})
export class BugDemoComponent implements OnInit  {
  destroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe(val => {
      console.log('Interval Value: ', val);
    });
  }
}
