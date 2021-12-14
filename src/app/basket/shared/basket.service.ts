import { Injectable } from '@angular/core';
import { Product } from '../../core/models/product'
import { BehaviorSubject, map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket$ = new BehaviorSubject<Product[]>([])

  constructor () {
  }

  addToBasket (product: Product) {
    let existingBasket = this.basket$.getValue()
    let updatedBasket = [...existingBasket, product]
    this.basket$.next(updatedBasket);
  }

  getTotal (): Observable<number> {
    return this.basket$.pipe(
      map(products => products
        .reduce((acc: number, next: Product) => acc + next.price, 0)
      )
    );
  }

  checkout () {
    this.basket$.next([])
  }

  getBasket(): Observable<Product[]> {
    return this.basket$.asObservable();
  }
}
