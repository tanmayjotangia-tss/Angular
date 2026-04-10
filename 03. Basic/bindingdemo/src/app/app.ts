import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  companyName  = 'Tss';
  data=false;
  value='';

  changeData(event: any){
    let value = event.target.value;
    this.value = value;
  }

}