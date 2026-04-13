import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  name:string = '';
  email:string = '';
  country:string = '';
  genders: string[] = ["Male", "Female"];
  genderSelected: string = '';
  hobbies: string[] = [];

  onHobbyChange(event: any) {
    const value = event.target.value;

    if (event.target.checked) {
      this.hobbies.push(value);
    } else {
      this.hobbies = this.hobbies.filter(h => h !== value);
    }
  }

  onSubmit(form: NgForm) {
    const formData = {
      ...form.value,
      hobbies: this.hobbies
    };

    console.log('Form submitted with values:', formData);
  }
}