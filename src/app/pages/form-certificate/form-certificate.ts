import { FormsModule, NgModel } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificado.service';


@Component({
  selector: 'app-form-certificate',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './form-certificate.html',
  styleUrl: './form-certificate.css'
})
export class FormCertificate {
  constructor(private certificateService: CertificateService) { }

  activity: string = ''

  certificate: Certificate = {
    name: '',
    activities: [],
    issueDate: ''
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

  currentDate() {
    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = currentDate.getFullYear()

    const formattedDate = `${day}/${month}/${year}`

    return formattedDate
  }

  deleteActivity(index: number) {
    this.certificate.activities.splice(index, 1)
  }

  submit() {
    if (!this.validForm()) {
      return
    }
    this.certificate.issueDate = this.currentDate()

    this.certificateService.AddCertificate(this.certificate)
  }
}
