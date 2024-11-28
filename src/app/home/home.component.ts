import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,  // Este componente é standalone
  imports: [HeaderComponent, CommonModule],  // Importa o HeaderComponent
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Consumindo a fake API criada com JSON Server
    this.http.get<any[]>('http://localhost:3000/videos')
      .subscribe((data) => {
        this.videos = data;
      });
  }
}
