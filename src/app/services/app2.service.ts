import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

import { LogService } from '../log.service';

@Injectable()
export class App2Service {

  constructor(private log: LogService) {
    this.log.publishLogMsg('这是App2Service的初始化' + uuidv4());
  }

}
