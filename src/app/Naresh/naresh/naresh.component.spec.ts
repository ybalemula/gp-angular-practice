import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NareshComponent } from './naresh.component';

describe('NareshComponent', () => {
  let component: NareshComponent;
  let fixture: ComponentFixture<NareshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NareshComponent]
    });
    fixture = TestBed.createComponent(NareshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
