import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmFinderViewComponent } from './atm-finder-view.component';

describe('AtmFinderViewComponent', () => {
  let component: AtmFinderViewComponent;
  let fixture: ComponentFixture<AtmFinderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmFinderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmFinderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
