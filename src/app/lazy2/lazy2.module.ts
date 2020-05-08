import * as uuidv4 from 'uuid/v4';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogService } from '../log.service';
import { SharedModule } from '../shared/shared/shared.module';
import { WidgetModule } from '../shared/widget/widget.module';
import { Lazy2Component } from './lazy2.component';
import { Lazy2RoutesModule } from './lazy2.routing';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    SharedModule,
    Lazy2RoutesModule
  ],
  declarations: [Lazy2Component]
})
export class Lazy2Module {
  constructor(private log: LogService) {
    this.log.publishLogMsg('这是Lazy2Module的初始化' + uuidv4());
  }
}
