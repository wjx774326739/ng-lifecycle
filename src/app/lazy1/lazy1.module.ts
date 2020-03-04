import * as uuidv4 from 'uuid/v4';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared/shared.module';
import { WidgetModule } from '../shared/widget/widget.module';
import { Lazy1Component } from './lazy1.component';
import { Lazy1RoutesModule } from './lazy1.routing';
import { Lazy1Service } from './services/lazy1.service';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    SharedModule,
    Lazy1RoutesModule
  ],
  declarations: [Lazy1Component],
  providers: [Lazy1Service]
})
export class Lazy1Module {
  constructor() {
    console.log('这是Lazy1Module的初始化' + uuidv4());
  }
}
