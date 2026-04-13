import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  students: Student[] = [];
  addStudent(student: Student) {
    this.students.push(student);
  }
}