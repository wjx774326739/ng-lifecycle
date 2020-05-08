import { LogService } from 'src/app/log.service';
import * as uuidv4 from 'uuid/v4';

import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  constructor(private log: LogService) {
    this.log.publishLogMsg('这是WidgetComponent的初始化' + uuidv4());
  }

  ngOnChanges() {
    this.log.publishLogMsg('ngOnChanges in WidgetComponent');
  }

  ngOnInit() {
    this.log.publishLogMsg('ngOnInit in WidgetComponent');
  }

  ngDoCheck() {
    this.log.publishLogMsg('ngDoCheck in WidgetComponent');
  }

  ngAfterContentInit(): void {
    this.log.publishLogMsg('ngAfterContentInit in WidgetComponent');
  }

  ngAfterContentChecked() {
    this.log.publishLogMsg('ngAfterContentChecked in WidgetComponent');
  }

  ngAfterViewInit(): void {
    this.log.publishLogMsg('ngAfterViewInit in WidgetComponent');
  }

  ngAfterViewChecked() {
    this.log.publishLogMsg('ngAfterViewChecked in WidgetComponent');
  }

  ngOnDestroy() {
    this.log.publishLogMsg('ngOnDestroy in WidgetComponent');
  }

}
