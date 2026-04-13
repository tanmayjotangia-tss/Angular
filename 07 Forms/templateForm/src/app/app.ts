import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('templateForm');
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
