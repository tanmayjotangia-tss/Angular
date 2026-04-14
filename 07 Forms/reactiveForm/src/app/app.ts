import { Component, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('reactiveForm');
  name = '';
  email = '';
  country = '';
  genders: string[] = ['Male', 'Female'];
  hobbies: string[] = [];

  hobbyList = [
    { name: 'Reading', checked: false },
    { name: 'Traveling', checked: false },
    { name: 'Cooking', checked: false },
    { name: 'Sports', checked: false },
  ];

  studentForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //Without FormBuilder, new FormGroup and new FormControl is required for each form control. With FormBuilder, we can use the group method to create a FormGroup and pass in an object with the form controls and their validators. This makes the code more concise and easier to read.
    // this.studentForm = new FormGroup({
    //   name: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   country: new FormControl(null, Validators.required),
    //   gender: new FormControl(null, Validators.required),
    //   hobbies: new FormArray([])
    // });

    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      hobbies: this.fb.array([]),
    });

    const hobbiesArray = this.studentForm.get('hobbies') as FormArray;

    this.hobbyList.forEach(() => {
      hobbiesArray.push(new FormControl(false));
    });
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
    const formValue = this.studentForm.value;

    const selectedHobbies = formValue.hobbies
      .map((v: boolean, i: number) => v && this.hobbyList[i].name)
      .filter(Boolean);

    const finalData = {
      ...formValue,
      hobbies: selectedHobbies,
    };

    console.log(finalData);

    this.studentForm.reset({
      name: null,
      email: null,
      country: null,
      gender: null,
    });

    const hobbiesArray = this.studentForm.get('hobbies') as FormArray;
    hobbiesArray.clear();

    this.hobbyList.forEach(() => {
      hobbiesArray.push(new FormControl(false));
    });
  }
}
