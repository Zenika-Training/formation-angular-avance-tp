import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/layout/menu/menu.component';
import { BasketModule } from './basket/basket.module'
import { CatalogModule } from './catalog/catalog.module'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'

export const WELCOME_MESSAGE = new InjectionToken('welcomeMsg')

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BasketModule,
    CatalogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [
    { provide: WELCOME_MESSAGE, useValue: 'Bienvenue sur Zenika Ecommerce' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
