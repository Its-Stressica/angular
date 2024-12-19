import { Component } from '@angular/core';
import { LocalCounterService } from './services/local-counter.service';
import { AppCounterService } from './services/app-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LocalCounterService],
})
export class AppComponent {
  title = 'Service2';

  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}
}
