import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Phone } from './phone';
import { LogService } from './log.service';
@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <input
        class="form-control cardinput"
        [(ngModel)]="name"
        placeholder="Модель"
      />
      <input
        type="number"
        class="form-control cardinput"
        [(ngModel)]="price"
        placeholder="Ціна"
      />
      <button class="btn btn-default cardinput" (click)="addItem(name, price)">
        Додати
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th class="cardinput">Модель</th>
          <th class="cardinput">Ціна</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td class="cardinput">{{ item.name }}</td>
          <td class="cardinput">{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  `,

  styleUrls: ['./app.component.css'],

  providers: [DataService],
})
export class AppComponent implements OnInit {
  name: string = '';
  price!: number;
  items: Phone[] = [];
  constructor(private dataService: DataService) {}
  addItem(name: string, price: number) {
    this.dataService.addData(name, price);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
