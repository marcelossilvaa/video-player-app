import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HttpClientModule, HeaderComponent, CommonModule, FormsModule]
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  filteredVideos: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  isLoading: boolean = true;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/videos')
      .subscribe((data) => {
        this.videos = data;
        this.categories = Array.from(new Set(data.map(video => video.category)));
        this.filteredVideos = data; 
        console.log('Vídeos carregados:', this.videos);
      });
  }

  onCategoryChange(): void {
    console.log('Categoria selecionada:', this.selectedCategory);
    this.filterVideosByCategory();
  }

  extractYouTubeVideoId(url: string): string | null {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }

   onVideoLoad(): void {
    this.isLoading = false;
   }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractYouTubeVideoId(url);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  filterVideosByCategory(): void {
    console.log('Categoria selecionada no filtro:', this.selectedCategory);
    if (this.selectedCategory) {
      this.filteredVideos = this.videos.filter(video => video.category === this.selectedCategory);
    } else {
      this.filteredVideos = this.videos;
    }
    console.log('Vídeos filtrados:', this.filteredVideos);
  }
}
