import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: ` <p>Ім'я: {{ name }}</p>
    <p>Вік: {{ age }}</p>

    <!-- Exercise 2 -->
    <input type="text" [value]="name" />
    <input type="text" [value]="age" />
    <p [textContent]="name"></p>

    <!-- Exercise 3 -->
    <table border="1">
      <tr>
        <td [attr.colspan]="colspan">One-Two</td>
      </tr>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
    </table>

    <!-- Exercise 4 -->
    <p>Кількість кліків {{ count }}</p>
    <button (click)="increase()">Click</button>
    <p>Кількість кліків {{ count_2 }}</p>
    <button (click)="increase_2($event)">Click</button>

    <!-- Exercise 5 -->
    <p>Привіт {{ name }}</p>
    <input type="text" [(ngModel)]="name" /> <br /><br />
    <input type="text" [(ngModel)]="name" />`,
})
export class AppComponent {
  name = 'Tom';
  age = 25;

  // Exercise 3
  colspan = 2;

  // Exercise 4
  count: number = 0;
  count_2: number = 0;

  increase(): void {
    this.count++;
  }

  increase_2($event: any): void {
    this.count_2++;
    console.log($event);
  }
}
