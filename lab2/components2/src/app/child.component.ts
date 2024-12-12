import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: ` <button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>`,
})
export class ChildComponent {
  @Input() userName: string = '';
  _userAge: number = 0;
  @Input()
  set userAge(age: number) {
    if (age < 0) this._userAge = 0;
    else if (age > 100) this._userAge = 100;
    else this._userAge = age;
  }
  get userAge() {
    return this._userAge;
  }
  @Output() changed = new EventEmitter<boolean>();
  change(increased: any) {
    this.changed.emit(increased);
  }
}
