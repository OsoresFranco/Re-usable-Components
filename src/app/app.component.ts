import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {
    this.form1 = this.fb.group({
      name: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      card: new FormControl('', Validators.required),
    });
  }

  form1: FormGroup;

  hasError(parent: FormGroup, controlName: string) {
    return (
      parent.get(controlName)?.hasError('required') &&
      parent.get(controlName)?.touched
    );
  }

  onClick(){
    console.log(this.form1.value)
  }

  title = 'testing';
}
