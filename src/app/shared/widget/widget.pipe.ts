import { LogService } from 'src/app/log.service';
import * as uuidv4 from 'uuid/v4';

import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe( {
    name: 'appWidget'
  }

) export class WidgetPipe implements PipeTransform {

  constructor(private log:LogService) {
    this.log.publishLogMsg('这是WidgetPipe的初始化'+ uuidv4());
  }

  transform(value: any, args?: any): any {
    return value;
  }

  ngOnChanges() {
    this.log.publishLogMsg('ngOnChanges in WidgetPipe');
  }

  ngOnInit() {
    this.log.publishLogMsg('ngOnInit in WidgetPipe');
  }

  ngDoCheck() {
    this.log.publishLogMsg('ngDoCheck in WidgetPipe');
  }

  ngAfterContentInit(): void {
    this.log.publishLogMsg('ngAfterContentInit in WidgetPipe');
  }

  ngAfterContentChecked() {
    this.log.publishLogMsg('ngAfterContentChecked in WidgetPipe');
  }

  ngAfterViewInit(): void {
    this.log.publishLogMsg('ngAfterViewInit in WidgetPipe');
  }

  ngAfterViewChecked() {
    this.log.publishLogMsg('ngAfterViewChecked in WidgetPipe');
  }

  ngOnDestroy(): void {
    this.log.publishLogMsg('ngOnDestroy in WidgetPipe');
  }

}
