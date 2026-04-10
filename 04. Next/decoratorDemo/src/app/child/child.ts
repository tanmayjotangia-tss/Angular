import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
playerName: string = '';
@Output()
 playerNameChange: EventEmitter<string> = new EventEmitter<string>();

onInput() {
  this.playerNameChange.emit(this.playerName);
}
}
