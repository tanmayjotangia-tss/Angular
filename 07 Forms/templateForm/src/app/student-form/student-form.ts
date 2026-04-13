import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
 @Output() studentAdded = new EventEmitter<Student>();
  
  genders: string[] = ['Male', 'Female'];
  hobbies: string[] = [];

  hobbyList = ['Reading', 'Traveling', 'Cooking', 'Sports'];

  onHobbyChange(event: any) {
    const value = event.target.value;

    if (event.target.checked) {
      this.hobbies.push(value);
    }
  }

  onSubmit(form: NgForm) {
    const student: Student = {
      name: form.value.name,
      email: form.value.email,
      country: form.value.country,
      gender: form.value.gender,
      hobbies: [...this.hobbies]
    };

    this.studentAdded.emit(student);

    form.reset();
    this.hobbies = [];
  }
}
