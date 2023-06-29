import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildcomponentComponent } from './chaildcomponent.component';

describe('ChaildcomponentComponent', () => {
  let component: ChaildcomponentComponent;
  let fixture: ComponentFixture<ChaildcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaildcomponentComponent]
    });
    fixture = TestBed.createComponent(ChaildcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
