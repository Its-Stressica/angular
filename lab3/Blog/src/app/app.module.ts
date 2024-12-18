import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FilterPipe } from './pipes/filter.pipes';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PostComponent, PostFormComponent, FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
