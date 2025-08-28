import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";

@Component({
  selector: 'app-form-certificate',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './form-certificate.html',
  styleUrl: './form-certificate.css'
})
export class FormCertificate {
  name: string = ''
  activity: string = ''
  activities: string[] = ['Angular', 'React']
}
