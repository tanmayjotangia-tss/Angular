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
  onSubmit(form: NgForm) {
    this.name = form.value.name;
    this.email = form.value.email;
    this.country = form.value.country;
    this.genderSelected = form.value.gender;

    console.log('Form submitted with values:', form.value);
  }
}
