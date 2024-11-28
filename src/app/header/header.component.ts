import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true, 
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = true;  // Altere para true ou false conforme necessário

  ngOnInit(): void {
    // Remova a chamada ao AuthService
  }

  logout() {
    // Lógica de logout removida
  }
}
