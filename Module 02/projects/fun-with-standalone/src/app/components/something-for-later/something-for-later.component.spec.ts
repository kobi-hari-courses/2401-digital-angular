import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingForLaterComponent } from './something-for-later.component';

describe('SomethingForLaterComponent', () => {
  let component: SomethingForLaterComponent;
  let fixture: ComponentFixture<SomethingForLaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomethingForLaterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomethingForLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
