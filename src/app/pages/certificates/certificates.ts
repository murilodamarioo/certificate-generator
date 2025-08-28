import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { CertificateItem } from '../../_components/certificate-item/certificate-item';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';

@Component({
  selector: 'app-certificates',
  imports: [CertificateItem, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
  constructor(private router: Router) { }

}
