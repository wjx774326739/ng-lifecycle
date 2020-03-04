import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable()
export class App2Service {

  constructor() {
    console.log('这是App2Service的初始化' + uuidv4());
   }

}
