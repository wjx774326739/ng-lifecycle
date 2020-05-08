import { LogService } from 'src/app/log.service';
import * as uuidv4 from 'uuid/v4';

import { Directive } from '@angular/core';

@Directive({
  selector: '[appWidget]'
})
export class WidgetDirective {

  constructor(private log: LogService) {
    this.log.publishLogMsg('这是WidgetDirective的初始化' + uuidv4());
  }

  ngOnChanges() {
    this.log.publishLogMsg('ngOnChanges in WidgetDirective');
  }

  ngOnInit() {
    this.log.publishLogMsg('ngOnInit in WidgetDirective');
  }

  ngDoCheck() {
    this.log.publishLogMsg('ngDoCheck in WidgetDirective');
  }

  ngAfterContentInit(): void {
    this.log.publishLogMsg('ngAfterContentInit in WidgetDirective');
  }

  ngAfterContentChecked() {
    this.log.publishLogMsg('ngAfterContentChecked in WidgetDirective');
  }

  ngAfterViewInit(): void {
    this.log.publishLogMsg('ngAfterViewInit in WidgetDirective');
  }

  ngAfterViewChecked() {
    this.log.publishLogMsg('ngAfterViewChecked in WidgetDirective');
  }

  ngOnDestroy() {
    this.log.publishLogMsg('ngOnDestroy in WidgetDirective');
  }

}
