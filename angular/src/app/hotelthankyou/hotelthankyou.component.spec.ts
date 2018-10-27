import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelthankyouComponent } from './hotelthankyou.component';

describe('HotelthankyouComponent', () => {
  let component: HotelthankyouComponent;
  let fixture: ComponentFixture<HotelthankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelthankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
