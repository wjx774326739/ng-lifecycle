import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

import { LogService } from '../log.service';

@Injectable({
  providedIn: 'root'
})
export class App1Service {

  constructor(private log: LogService) {
    this.log.publishLogMsg('这是App1Service的初始化' + uuidv4());
  }

}
