import { Component } from '@angular/core';

import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-lifecycle';
  logMsgs: string[] = [];
  constructor(
    private log: LogService,
  ) {
    this.log.subscribeLogMsg().subscribe(msg => this.logMsgs.push(msg));
  }
}
