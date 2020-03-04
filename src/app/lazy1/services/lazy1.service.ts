import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable()
export class Lazy1Service {

  constructor() {
    console.log('这是Lazy1Service的初始化!' + uuidv4());
  }

}
