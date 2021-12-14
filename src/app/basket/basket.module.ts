import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './pages/basket.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'


@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule
  ]
})
export class BasketModule {
}
