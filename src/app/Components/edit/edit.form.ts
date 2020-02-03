import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EditForm {

  constructor(private formBuilder: FormBuilder) {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      id: this.formBuilder.control('', [
      ]),
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      type: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      histories: this.formBuilder.control('', [
        Validators.minLength(3)
      ])
    });
  }
}
