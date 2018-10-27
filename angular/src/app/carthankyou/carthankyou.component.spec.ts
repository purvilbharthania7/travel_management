import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarthankyouComponent } from './carthankyou.component';

describe('CarthankyouComponent', () => {
  let component: CarthankyouComponent;
  let fixture: ComponentFixture<CarthankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarthankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
