import * as uuidv4 from 'uuid/v4';

import { Directive } from '@angular/core';

@Directive({
  selector: '[appWidget]'
})
export class WidgetDirective {

  constructor() {
    console.log('这是WidgetDirective的初始化' + uuidv4());
  }

  ngOnChanges() {
    console.log('ngOnChanges in WidgetDirective');
  }

  ngOnInit() {
    console.log('ngOnInit in WidgetDirective');
  }

  ngDoCheck() {
    console.log('ngDoCheck in WidgetDirective');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in WidgetDirective');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked in WidgetDirective');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in WidgetDirective');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked in WidgetDirective');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy in WidgetDirective');
  }

}
