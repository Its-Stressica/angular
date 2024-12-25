import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserDataService],
})
export class AppComponent {
  constructor(public userDataService: UserDataService) {}
  users: User[] = [];

  ngOnInit() {
    this.userDataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
