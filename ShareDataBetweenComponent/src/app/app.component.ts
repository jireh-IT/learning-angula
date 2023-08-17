import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ShareDataBetweenComponent';
  parentMessage = 'Parent Component Message';
  message: string | undefined;
  fromChild: String | undefined;

  @ViewChild(ChildComponentComponent) childComponent: any;
  constructor() {
    console.log(this.childComponent);
  }
  ngAfterViewInit(): void {
    
    this.message = this.childComponent.messageChild;
  }

  receiveMessage($event: String) {
    this.fromChild = $event;
  }

}
