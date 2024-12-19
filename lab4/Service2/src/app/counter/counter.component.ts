import { Component } from '@angular/core';
import { LocalCounterService } from '../services/local-counter.service';
import { AppCounterService } from '../services/app-counter.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  providers: [LocalCounterService],
})
export class CounterComponent {
  title = 'Counter';

  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}
}
