import * as uuidv4 from 'uuid/v4';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Widget1Module } from '../widget1/widget1.module';
import { Widget2Module } from '../widget2/widget2.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    Widget1Module,
    Widget2Module,
  ]
})
export class SharedModule {
  constructor() {
    console.log('这是SharedModule的初始化' + uuidv4());
  }
}
