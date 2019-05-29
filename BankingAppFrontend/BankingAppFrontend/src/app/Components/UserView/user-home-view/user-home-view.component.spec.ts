import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeViewComponent } from './user-home-view.component';

describe('UserHomeViewComponent', () => {
  let component: UserHomeViewComponent;
  let fixture: ComponentFixture<UserHomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
