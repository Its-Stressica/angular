import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="changeVisibility()">Перемкнути</button>
    <child-comp *ngIf="isVisible" [name]="name"></child-comp>
    <input type="text" [(ngModel)]="name" /> `,
})
export class AppComponent {
  name: string = 'Abuba';

  isVisible: boolean = true;

  changeVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
