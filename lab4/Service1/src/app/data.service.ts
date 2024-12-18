import { Phone } from './phone';

export class DataService {
  private data: Phone[] = [
    { name: 'Apple iPhone 7', price: 36000 },
    { name: 'HP Elite x3', price: 38000 },
    { name: 'Alcatel Idol S4', price: 12000 },
  ];
  getData(): Phone[] {
    return this.data;
  }
  addData(name: string, price: number) {
    this.data.push(new Phone(name, price));
  }
}
