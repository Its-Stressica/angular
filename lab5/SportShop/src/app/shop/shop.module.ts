import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [ShopComponent, CounterDirective, CartSummaryComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
