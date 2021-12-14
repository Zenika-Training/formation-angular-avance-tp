import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { Product } from '../../core/models/product';
import { CatalogService } from '../shared/catalog.service'
import { BasketService } from '../../basket/shared/basket.service'
import { WELCOME_MESSAGE } from '../../app.module'
import { Observable, tap } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor (@Inject(WELCOME_MESSAGE) public title: string,
               private catalogService: CatalogService,
               private basketService: BasketService) {

  }

  ngOnInit (): void {
    this.products$ = this.catalogService.fetchProducts()
  }

  getTotal (): Observable<number> {
    return this.basketService.getTotal()
  }

  addToBasket (product: Product): void {
    this.basketService.addToBasket(product);
    this.catalogService.decrementStock(product);
  }

  isAvailable (product: Product): boolean {
    return this.catalogService.isAvailable(product);
  }
}
