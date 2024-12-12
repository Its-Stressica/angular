import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!-- exercise 6 -->
    <div [class.isredbox]="isRed"></div>
    <div [class.isredbox]="!isRed"></div>
    <input type="checkbox" [(ngModel)]="isRed" />
    <div [class]="blue"></div>

    <!-- exercise 7 -->
    <div [style.backgroundColor]="isyellow ? 'yellow' : 'blue'"></div>
    <div [style.background-color]="!isyellow ? 'yellow' : 'blue'"></div>
    <input type="checkbox" [(ngModel)]="isyellow" />
  `,

  styles: [
    `
      /*exercise 6*/
      div {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
      }
      .isredbox {
        background-color: red;
      }
      .isbluebox {
        background-color: blue;
      }
    `,
  ],
})
export class AppComponent {
  // exercise 6
  title = 'binding2';
  isRed = false;
  blue = 'isbluebox';

  // exercise 7
  isyellow = false;
}
