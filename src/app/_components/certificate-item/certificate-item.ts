import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router } from '@angular/router';


@Component({
  selector: 'app-certificate-item',
  imports: [SecondaryButton],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css'
})
export class CertificateItem {
  id: string = '8'

  constructor(private router: Router) { }

  redirectToCertificate() {
    this.router.navigate(['/certificate', this.id])
  }
}
