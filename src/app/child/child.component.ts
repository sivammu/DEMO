import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() strParent:any;


  @Output() messageEvent = new EventEmitter();

  data = 'This is siva from child'

  sendMessage(){
    this.messageEvent.emit('Hi This is from child');
  }

}
