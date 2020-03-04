import * as uuidv4 from 'uuid/v4';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Widget2Component } from './widget2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Widget2Component]
})
export class Widget2Module {
  constructor() {
    console.log('这是Widget2Module的初始化' + uuidv4());
  }
}
