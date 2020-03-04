import * as uuidv4 from 'uuid/v4';

import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
  name: 'appWidget'
})
export class WidgetPipe implements PipeTransform {

  constructor() {
    console.log('这是WidgetPipe的初始化' + uuidv4());
  }

  transform(value: any, args?: any): any {
    return value;
  }

}
