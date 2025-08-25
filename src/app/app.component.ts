import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from "./_components/base-ui/base-ui";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  title = signal('certificate-generator');
  showNavBar: boolean = false
}
