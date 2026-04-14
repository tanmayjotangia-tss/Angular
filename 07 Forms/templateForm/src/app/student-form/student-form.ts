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

  hobbyList = [
    { name: 'Reading', checked: false },
    { name: 'Traveling', checked: false },
    { name: 'Cooking', checked: false },
    { name: 'Sports', checked: false }
  ];
  
  onHobbyChange(event: any) {
    const value = event.target.value;

    if (event.target.checked) {
      this.hobbies.push(value);
    }
  }

  onSubmit(form: NgForm) {
    const selectedHobbies = this.hobbyList
      .filter(h => h.checked)
      .map(h => h.name);

    const student: Student = {
      name: form.value.name,
      email: form.value.email,
      country: form.value.country,
      gender: form.value.gender,
      hobbies: selectedHobbies
    };

    this.studentAdded.emit(student);

    form.reset();

    this.hobbyList.forEach(h => h.checked = false);
  }
}
