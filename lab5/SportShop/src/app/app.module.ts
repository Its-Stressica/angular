import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cartDetail.component';
import { CheckoutComponent } from './shop/checkout.component';
import { RouterModule } from '@angular/router';
import { ShopFirstGuard } from './shopFirst.guard';

@NgModule({
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      {
        path: 'shop',
        component: ShopComponent,
        canActivate: [ShopFirstGuard],
      },
      {
        path: 'cart',
        component: CartDetailComponent,
        canActivate: [ShopFirstGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [ShopFirstGuard],
      },
      { path: '**', redirectTo: '/shop' },
    ]),
  ],
  declarations: [AppComponent],
  providers: [ShopFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
