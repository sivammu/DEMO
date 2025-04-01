import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormsModule, ParentComponent, RouterLink],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Siva';
  strparent = "Hi Hellow"
  h1border:string = 'border1';
  x = 1;
  date:String = new Date().toLocaleTimeString();

  disable:boolean = false;

  active:boolean = false;

  counter:number = 0;

  name:String = "";
  user:String = "Siva";

  id =setInterval(() => {
    this.date = new Date().toLocaleTimeString();
  }, 5000);

  test(){
    return this.x+1;
  }

  increment(){
    return this.counter+= 1;
  }

  changeName(e:any){
    this.name = e.target.value;
  }

}
