import * as uuidv4 from 'uuid/v4';

import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent   {

  constructor() {
    console.log('这是WidgetComponent的初始化' + uuidv4());
  }

  ngOnChanges() {
    console.log('ngOnChanges in WidgetComponent');
  }

  ngOnInit() {
    console.log('ngOnInit in WidgetComponent');
  }

  ngDoCheck() {
    console.log('ngDoCheck in WidgetComponent');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in WidgetComponent');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked in WidgetComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in WidgetComponent');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked in WidgetComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy in WidgetComponent');
  }

}
