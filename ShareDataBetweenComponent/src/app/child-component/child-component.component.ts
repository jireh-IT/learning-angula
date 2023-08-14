import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  titles: string = 'Child Component';
  messageChild: string = 'Message from Child Component';

  @Input()
  fromParent: string = '';
}
