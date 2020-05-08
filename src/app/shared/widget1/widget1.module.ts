import { LogService } from 'src/app/log.service';
import * as uuidv4 from 'uuid/v4';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Widget1Component } from './widget1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Widget1Component]
})
export class Widget1Module {
  constructor(private log: LogService) {
    this.log.publishLogMsg('这是Widget1Module的初始化' + uuidv4());
  }
}
