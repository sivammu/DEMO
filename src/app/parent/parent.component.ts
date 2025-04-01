import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  message:any = 'This is Parent'

  recievedMessage:any;

  @ViewChild(ChildComponent) childref:any;


  receiveMessage(message:string){
    this.recievedMessage = message;
  }
}
