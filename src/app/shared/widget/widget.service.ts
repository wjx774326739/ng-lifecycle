import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {

  constructor() {
    console.log('这是WidgetService的初始化' + uuidv4());
  }

}
