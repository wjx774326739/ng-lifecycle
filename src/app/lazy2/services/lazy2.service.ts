import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable()
export class Lazy2Service {

  constructor() {
    console.log('这是Lazy2Service的初始化!' + uuidv4());
  }

}
