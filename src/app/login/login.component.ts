// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // Importe o HeaderComponent standalone

@Component({
  selector: 'app-login',
  standalone: true,  // O LoginComponent também é standalone
  imports: [HeaderComponent],  // Inclua o HeaderComponent nos imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Lógica do LoginComponent
}
