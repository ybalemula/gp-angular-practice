import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandeepTestComponent } from './sandeep-test.component';

describe('SandeepTestComponent', () => {
  let component: SandeepTestComponent;
  let fixture: ComponentFixture<SandeepTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandeepTestComponent]
    });
    fixture = TestBed.createComponent(SandeepTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
