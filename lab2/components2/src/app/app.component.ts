import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Кількість кліків: {{ clicks }}</h2>
    <child-comp (changed)="onChanged($event)"></child-comp>
  `,
})
export class AppComponent {
  clicks: number = 0;
  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }
}
