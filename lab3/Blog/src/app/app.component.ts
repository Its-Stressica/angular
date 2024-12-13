import { Component } from '@angular/core';
export interface Post {
  title: string;
  text: string;
  id?: number;
  date?: Date;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BlogComponents';
  search = '';
  posts: Post[] = [
    { title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', id: 1 },
    { title: 'Вивчаю директиви', text: 'Все ще створюю "Блог"', id: 2 },
  ];

  transform(posts: Post[], search: string = ''): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
