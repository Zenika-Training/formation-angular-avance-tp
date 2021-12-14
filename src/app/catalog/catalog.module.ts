import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component'
import { CatalogComponent } from './pages/catalog.component'
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    ProductComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CatalogModule { }
