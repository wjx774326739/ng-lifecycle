import { LogService } from 'src/app/log.service';
import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable()
export class Lazy2Service {

  constructor(private log: LogService) {
    this.log.publishLogMsg('这是Lazy2Service的初始化!' + uuidv4());
  }

}
