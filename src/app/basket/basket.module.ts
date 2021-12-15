import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './pages/basket.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { MatListModule } from '@angular/material/list'
import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    BasketComponent
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
    MatButtonModule
  ]
})
export class BasketModule {
}
