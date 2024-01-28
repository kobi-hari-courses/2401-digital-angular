import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildButtonComponent } from './wild-button.component';

describe('WildButtonComponent', () => {
  let component: WildButtonComponent;
  let fixture: ComponentFixture<WildButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
