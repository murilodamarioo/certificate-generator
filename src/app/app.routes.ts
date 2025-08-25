import { Routes } from '@angular/router'

import { Certificates } from './pages/certificates/certificates'
import { FormCertificate } from './pages/form-certificate/form-certificate'
import { Certificate } from './pages/certificate/certificate'

export const routes: Routes = [
  {
    path: '',
    component: Certificates
  },
  {
    path: 'certificate/new',
    component: FormCertificate
  },
  {
    path: 'certificate/:id',
    component: Certificate
  }
];
