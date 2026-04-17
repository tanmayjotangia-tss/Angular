import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  student={
    rollNumber:1,
    name:"Sachin",
    city:"Rajkot",
    fees: 50000,
    dob:'01/06/1998'
  }
}
