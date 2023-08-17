import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  titles: string = 'Child Component';
  messageChild: string = 'Message from Child Component';

  outPutmessageFromChild: string = 'OutPut message from Child Component via OutPut';

  @Input()
  fromParent: string = '';

  @Output()
  messageEvent: EventEmitter<String> = new EventEmitter();

  sendMessage() {
    this.messageEvent.emit(this.outPutmessageFromChild);
  }

}
