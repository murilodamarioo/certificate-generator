import { Injectable } from '@angular/core'
import { Certificate } from '../interfaces/certificate'

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: Certificate[] = []

  constructor() { }

  AddCertificate(certificate: Certificate) {
    this.certificates.push(certificate)
    console.log(this.certificates)
  }
}
