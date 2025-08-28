import { FormsModule, NgModel } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";


@Component({
  selector: 'app-form-certificate',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './form-certificate.html',
  styleUrl: './form-certificate.css'
})
export class FormCertificate {
  name: string = ''
  activity: string = ''
  activities: string[] = []

  invalidField(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.activities.length > 0 && this.name.length > 0
  }
  addActivity() {
    this.activities.push(this.activity)
    this.activity = ''
  }

  deleteActivity(index: number) {
    this.activities.splice(index, 1)
  }
}
