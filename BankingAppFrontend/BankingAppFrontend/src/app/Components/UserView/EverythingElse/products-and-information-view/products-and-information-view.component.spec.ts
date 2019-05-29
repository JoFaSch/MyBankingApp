import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndInformationViewComponent } from './products-and-information-view.component';

describe('ProductsAndInformationViewComponent', () => {
  let component: ProductsAndInformationViewComponent;
  let fixture: ComponentFixture<ProductsAndInformationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAndInformationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAndInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
