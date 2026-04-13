import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lifeCycleHook2');
  hidden = false;

  toggleChild() {
    this.hidden = !this.hidden;
  }
}
