import { FormsModule, NgModel } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { Certificate } from '../../interfaces/certificate';


@Component({
  selector: 'app-form-certificate',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './form-certificate.html',
  styleUrl: './form-certificate.css'
})
export class FormCertificate {
  activity: string = ''

  certificate: Certificate = {
    name: '',
    activities: []
  }

  invalidField(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0
  }
  addActivity() {
    this.certificate.activities.push(this.activity)
    this.activity = ''
  }

  deleteActivity(index: number) {
    this.certificate.activities.splice(index, 1)
  }

  submit() {
    if (!this.validForm()) {
      return
    }

    console.log(this.certificate)
  }
}
