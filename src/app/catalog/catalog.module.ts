import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component'
import { CatalogComponent } from './pages/catalog.component'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    ProductComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: CatalogComponent }
    ])
  ]
})
export class CatalogModule {
}
