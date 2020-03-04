import * as uuidv4 from 'uuid/v4';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WidgetComponent } from './widget.component';
import { WidgetDirective } from './widget.directive';
import { WidgetPipe } from './widget.pipe';
import { WidgetService } from './widget.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetComponent,
    WidgetDirective,
    WidgetPipe,
  ],
  providers: [
    WidgetService
  ],
  exports: [
    WidgetComponent,
    WidgetDirective,
    WidgetPipe,
  ]
})
export class WidgetModule {
  constructor() {
    console.log('这是WidgetModule的初始化' + uuidv4());
  }
}
