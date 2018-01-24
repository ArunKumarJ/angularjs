import { Component, OnInit,Input,SimpleChange } from '@angular/core';
import { FormGroup,Validators,FormControl,FormBuilder  } from '@angular/forms';

import { User } from './User';

@Component({
  selector: 'app-section-f',
  templateUrl: './section-f.component.html',
  styleUrls: ['./section-f.component.css']
})
export class SectionFComponent implements OnInit {

  userForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName:[null,Validators.required],
      middleName:[null],
      lastName:[null,Validators.required],
      suffix:[null,Validators.required],
      street:[null,Validators.required],
      city:[null,Validators.required],
      state:[null,Validators.required],
      zipCode:[null,Validators.required],
      phoneHome:[null,Validators.required],
      phoneWork:[null,Validators.required],
      phoneCell:[null,Validators.required],
    });
  }

  isFieldValid(field: string) {
    return !this.userForm.get(field).valid && this.userForm.get(field).touched;
  }

  onSubmit() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.userForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.userForm.reset();
  }
}
