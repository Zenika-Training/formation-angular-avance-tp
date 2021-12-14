import { Injectable } from '@angular/core';
import { Product } from '../../core/models/product'

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket: Product[] = []

  constructor() { }

  addToBasket (product: Product) {
    this.basket.push(product);
  }

  getTotal () {
    return this.basket.reduce((acc: number, next: Product) => acc + next.price, 0);
  }

  checkout () {
    this.basket = []
  }

  getBasket () {
    return this.basket;
  }
}
