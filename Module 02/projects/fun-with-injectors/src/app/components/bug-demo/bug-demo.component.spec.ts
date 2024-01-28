import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDemoComponent } from './bug-demo.component';

describe('BugDemoComponent', () => {
  let component: BugDemoComponent;
  let fixture: ComponentFixture<BugDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BugDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
