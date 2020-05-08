import { LogService } from 'src/app/log.service';
import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {

  constructor(
    private log: LogService,
  ) {
    this.log.publishLogMsg('这是WidgetService的初始化' + uuidv4());
  }

}
