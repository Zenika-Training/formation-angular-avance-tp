import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../core/models/product';
import { CatalogService } from '../../shared/catalog.service'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('stockStatus', [
      state('last',
        style({
          transform: 'rotate(360deg)'
        })
      ),
      state('available',
        style({
          transform: 'rotate(0)'
        })
      ),
      transition('available => last',
        animate(500)
      )
    ])
  ]
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
