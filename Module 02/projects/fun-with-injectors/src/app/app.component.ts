import { Component, InjectionToken, Injector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThisService } from './services/this.service';
import { ThatService } from './services/that.service';
import { OtherService } from './services/other.service';
import { interval } from 'rxjs';
import { BugDemoComponent } from './components/bug-demo/bug-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BugDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
  providers: []
})
export class AppComponent {
  showBugDemo = false;

  toggleDemo() {
    this.showBugDemo = !this.showBugDemo;
  }

  private inj = inject(Injector);

  constructor() {
  }

  go() {
    const injector1 = Injector.create({
      providers: [ThisService, ThatService], 
      parent: this.inj
    });

    const injector2 = Injector.create({
      providers: [ThisService], 
      parent: injector1
    });

    const service1 = injector1.get(OtherService);
    console.log('service 1 = ', service1);
    const service2 = injector2.get(OtherService);
    console.log('service 2 = ', service2);

    runInInjectionContext(this.inj , () => {
      let x = inject(OtherService);
      console.log('Other service = ', x, ' which means that inject() worked');
    });


  }
}
