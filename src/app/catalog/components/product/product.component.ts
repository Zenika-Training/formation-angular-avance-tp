import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../core/models/product';
import { CatalogService } from '../../shared/catalog.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() data!: Product;
  @Output() addToBasket = new EventEmitter<Product>();

  constructor (private catalogService: CatalogService) {
  }

  addToBasketClick(): void {
    this.addToBasket.emit(this.data);
  }

  isTheLast(): boolean {
    return this.catalogService.isTheLast(this.data);
  }

}
