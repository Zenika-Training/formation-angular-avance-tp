import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/layout/menu/menu.component';
import { BasketModule } from './basket/basket.module'
import { CatalogModule } from './catalog/catalog.module'

export const WELCOME_MESSAGE = new InjectionToken('welcomeMsg')

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasketModule,
    CatalogModule
  ],
  providers: [
    { provide: WELCOME_MESSAGE, useValue: 'Bienvenue sur Zenika Ecommerce' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
