import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../model/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.data = new Product('title', 'description', 'photo', 42, 2);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an "addToBasket" event when "add" button is clicked', waitForAsync(async () => {
    const outputSpy = spyOn(component.addToBasket, 'emit')
    fixture.nativeElement.querySelector('button').click();
    await fixture.whenStable()
    expect(outputSpy).toHaveBeenCalled();
  }));

  it('should add "last" css class when product stock equals 1', () => {
    expect(fixture.nativeElement.querySelector('.thumbnail').classList.contains('last')).toBeFalsy();

    component.data = { ...component.data, stock: 1 };
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.thumbnail').classList.contains('last')).toBeTrue();
  });

});
