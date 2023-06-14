import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YadagiriTestComponent } from './yadagiri-test.component';

describe('YadagiriTestComponent', () => {
  let component: YadagiriTestComponent;
  let fixture: ComponentFixture<YadagiriTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YadagiriTestComponent]
    });
    fixture = TestBed.createComponent(YadagiriTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
