import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavBarVerticalComponent } from './user-nav-bar-vertical.component';

describe('UserNavBarVerticalComponent', () => {
  let component: UserNavBarVerticalComponent;
  let fixture: ComponentFixture<UserNavBarVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavBarVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavBarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
