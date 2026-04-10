import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {
  playerName: string = '';
  protected readonly title = signal('decoratorDemo');
  receivePlayerName(playerName: string) {
    this.playerName = playerName;
    console.log('Player Name received from child component : ', playerName);
  }
}
