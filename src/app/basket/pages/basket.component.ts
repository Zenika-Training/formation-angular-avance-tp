import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../core/models/product';
import { Customer } from '../../core/models/customer';
import { BasketService } from '../shared/basket.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent implements OnInit {
  basket$!: Observable<Product[]>;
  customer!: Customer;

  constructor(private router: Router, private basketService: BasketService) {
  }


  ngOnInit (): void {
    this.basket$ = this.basketService.getBasket();
    this.customer = new Customer();
  }

  checkout(e: Event):void {
    e.stopPropagation();
    e.preventDefault();
    this.basketService.checkout()
    this.router.navigate(['']);
  }
}
