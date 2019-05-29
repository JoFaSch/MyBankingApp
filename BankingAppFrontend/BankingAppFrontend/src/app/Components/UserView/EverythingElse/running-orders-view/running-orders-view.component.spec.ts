import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningOrdersViewComponent } from './running-orders-view.component';

describe('RunningOrdersViewComponent', () => {
  let component: RunningOrdersViewComponent;
  let fixture: ComponentFixture<RunningOrdersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningOrdersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
