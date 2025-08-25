import { Component } from '@angular/core';
import { CertificateItem } from "../../_components/certificate-item/certificate-item";

@Component({
  selector: 'app-certificates',
  imports: [CertificateItem],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

}
