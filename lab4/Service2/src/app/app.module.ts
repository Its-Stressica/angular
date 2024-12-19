import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AppCounterService } from './services/app-counter.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CounterComponent],
  bootstrap: [AppComponent, CounterComponent],
})
export class AppModule {}
