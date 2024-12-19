import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Phone } from './phone';

@Component({
  selector: 'app-root',
  template: ` <data-comp></data-comp>
    <data-comp></data-comp>`,

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
