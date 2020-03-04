import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class App1Service {

  constructor() {
    console.log('这是App1Service的初始化' + uuidv4());
  }

}
