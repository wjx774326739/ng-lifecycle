import {
    Component,
    OnInit
} from '@angular/core';

import { App1Service } from '../services/app1.service';
import { App2Service } from '../services/app2.service';
import { WidgetService } from '../shared/widget/widget.service';
import { Lazy2Service } from './services/lazy2.service';

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css'],
  providers: [Lazy2Service]
})
export class Lazy2Component implements OnInit {

  constructor(
    private app1Ser: App1Service,
    private app2Ser: App2Service,
    private lazy2Ser: Lazy2Service,
    private widgetSer: WidgetService,
  ) { }

  ngOnInit() {
  }

}
