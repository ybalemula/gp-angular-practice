import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshLoginComponent } from './mahesh-login.component';

describe('MaheshLoginComponent', () => {
  let component: MaheshLoginComponent;
  let fixture: ComponentFixture<MaheshLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaheshLoginComponent]
    });
    fixture = TestBed.createComponent(MaheshLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
