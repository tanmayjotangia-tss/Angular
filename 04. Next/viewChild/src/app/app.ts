import { Component, ElementRef, signal, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('inputRef2') secondInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('ageInput') ageInputRef!: ElementRef<HTMLInputElement>;
  getInputData(inputData:HTMLInputElement){
    console.log(inputData.value);
  }
  getInputSecondData(){
    console.log(this.secondInputRef.nativeElement.value);
  }


calculateAge(){
  const today = new Date();
  const birthdate = new Date(this.ageInputRef.nativeElement.value);
  let age = today.getFullYear() - birthdate.getFullYear();
  console.log(`Your age is: ${age}`);
}

}