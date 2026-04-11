import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(){
    console.log("Parent Component Constructor");
  }

  @ViewChild('inputRef') inputData!:ElementRef

  data='';
  onButtonClick() {
    this.data = this.inputData.nativeElement.value;
  }
}
