import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, tap } from 'rxjs'
import { Product } from '../../../core/models/product'
import { Customer } from '../../../core/models/customer'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { BasketService } from '../../shared/basket.service'

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaiementComponent implements OnInit {

  basket$!: Observable<Product[]>;
  customer!: Customer;
  form!: FormGroup;

  constructor(private router: Router, private basketService: BasketService, private fb: FormBuilder) {
  }


  ngOnInit (): void {
    this.form = this.fb.group({
      customerName: this.fb.control('', [ Validators.required ]),
      address: this.fb.control('', [ Validators.required ]),
      creditCard: this.fb.control('', [ Validators.required, Validators.pattern(/^\d{3}-\d{3}$/) ])
    });
    this.basket$ = this.basketService.getBasket();
    this.customer = new Customer();
  }

  checkout(e: Event):void {
    e.stopPropagation();
    e.preventDefault();
    this.basketService.checkout()
    this.router.navigate(['/', 'basket', 'confirmed']);
  }

  get nameField(): AbstractControl { return this.form.get('customerName')! }
  get addressField(): AbstractControl { return this.form.get('address')! }
  get creditCardField(): AbstractControl { return this.form.get('creditCard')! }

}
