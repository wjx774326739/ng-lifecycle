import { LogService } from 'src/app/log.service';
import * as uuidv4 from 'uuid/v4';

import { Injectable } from '@angular/core';

@Injectable()
export class Lazy2Service {

  private id: string;

  constructor(private log: LogService) {
    this.id = uuidv4();
    this.log.publishLogMsg('这是Lazy2Service的初始化!' + this.id);
  }

  ngOnInit(): void {
    this.log.publishLogMsg('这是Lazy2Service的ngOnInit!' + this.id);
  }

  ngOnDestroy(): void {
    this.log.publishLogMsg('这是Lazy2Service的ngOnDestroy销毁!' + this.id);
  }

}
