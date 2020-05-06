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

  ngOnChanges() {
    console.log('ngOnChanges in WidgetPipe');
  }

  ngOnInit() {
    console.log('ngOnInit in WidgetPipe');
  }

  ngDoCheck() {
    console.log('ngDoCheck in WidgetPipe');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in WidgetPipe');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked in WidgetPipe');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in WidgetPipe');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked in WidgetPipe');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy in WidgetPipe');
  }

}
