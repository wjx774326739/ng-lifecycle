import {
    Component,
    OnInit
} from '@angular/core';

import { WidgetService } from '../shared/widget/widget.service';
import { Lazy1Service } from './services/lazy1.service';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component implements OnInit {

  constructor(
    private lazy1Ser: Lazy1Service,
    private widgetSer: WidgetService,
  ) { }

  ngOnInit() {
  }

}
