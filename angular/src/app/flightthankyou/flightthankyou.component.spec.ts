import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightthankyouComponent } from './flightthankyou.component';

describe('FlightthankyouComponent', () => {
  let component: FlightthankyouComponent;
  let fixture: ComponentFixture<FlightthankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightthankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
