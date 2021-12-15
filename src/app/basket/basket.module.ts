import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './pages/basket.component'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { MatListModule } from '@angular/material/list'
import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { PaiementConfirmedComponent } from './pages/paiement-confirmed/paiement-confirmed.component'


@NgModule({
  declarations: [
    BasketComponent,
    PaiementComponent,
    PaiementConfirmedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule,
    MatListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'paiement', pathMatch: 'full'},
      { path: 'paiement', component: PaiementComponent },
      { path: 'confirmed', component: PaiementConfirmedComponent },
    ])
  ]
})
export class BasketModule {
}
