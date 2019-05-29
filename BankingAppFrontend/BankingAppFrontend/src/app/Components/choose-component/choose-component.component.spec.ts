import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseComponentComponent } from './choose-component.component';

describe('ChooseComponentComponent', () => {
  let component: ChooseComponentComponent;
  let fixture: ComponentFixture<ChooseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
