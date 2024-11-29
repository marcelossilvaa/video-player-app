import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = true;

  ngOnInit(): void {
  }

  logout() {
  }
}
