import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { CertificateItem } from "./_components/certificate-item/certificate-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, CertificateItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  title = signal('certificate-generator');
  showNavBar: boolean = false
}
