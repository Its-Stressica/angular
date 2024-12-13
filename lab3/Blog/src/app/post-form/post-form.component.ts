import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  title = '';
  text = '';
  date_post?: Date;
  constructor() {}
  ngOnInit(): void {}
  addPost() {
    if (this.title.trim() && this.text.trim()) {
      this.date_post = new Date();
      const post: Post = {
        title: this.title,
        text: this.text,
        date: this.date_post,
      };
      this.onAdd.emit(post);
      console.log('New post', post);
      this.title = this.text = '';
    }
  }

  myDate$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}
