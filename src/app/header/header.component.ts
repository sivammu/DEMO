import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestPipe } from '../test.pipe';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TestPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() strparent: any; 


  show:boolean = true;

  // employees:string[] = ['Siva', 'Batchu', 'Varshu']
  employees = ""

  cities = ["Hyderabad",'bangalore','Chennai']

  mobiles = [{

    'name':'Samsung',
    'price' : 23232,
    'color' : 'red'
  },
  {

    'name':'Realme',
    'price' : 3434,
    'color' : 'black'
  },
  {

    'name':'LG',
    'price' : 343,
    'color' : 'Blue'
  }]
}
