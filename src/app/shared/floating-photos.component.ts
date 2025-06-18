import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FloatingPhoto {
  id: number;
  src: string;
  alt: string;
  size: number;
  left: number;
  top: number;
  animationDelay: number;
  rotationSpeed: number;
  opacity: number;
}

@Component({
  selector: 'app-floating-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="floating-container">
      <div 
        *ngFor="let photo of photos; trackBy: trackByPhotoId"
        class="floating-photo-wrapper"
        [style.left]="photo.left + '%'"
        [style.top]="photo.top + '%'"
        [style.animation-delay]="photo.animationDelay + 's'"
      >
        <img 
          [src]="photo.src"
          [alt]="photo.alt"
          class="floating-photo"
          [style.width.px]="photo.size"
          [style.height.px]="photo.size"
          [style.opacity]="photo.opacity"
          [style.animation-duration]="photo.rotationSpeed + 's'"
          (error)="onImageError($event, photo)"
        />
      </div>
    </div>
  `,
  styles: [`
    .floating-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }

    .floating-photo-wrapper {
      position: absolute;
      animation: float 6s ease-in-out infinite;
    }

    .floating-photo {
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      animation: rotate-coin 10s linear infinite;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease;
    }

    .floating-photo:hover {
      transform: scale(1.1);
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes rotate-coin {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }

    /* Optimización para móviles */
    @media (max-width: 768px) {
      .floating-photo-wrapper:nth-child(n+9) {
        display: none; /* Ocultar fotos 9-16 en móviles */
      }
      
      .floating-photo {
        width: 60px !important;
        height: 60px !important;
        opacity: 0.5 !important;
      }
      
      .floating-photo-wrapper {
        animation-duration: 8s; /* Animación más lenta en móviles */
      }
    }

    @media (max-width: 480px) {
      .floating-photo-wrapper:nth-child(n+6) {
        display: none; /* Solo 5 fotos en pantallas muy pequeñas */
      }
      
      .floating-photo {
        width: 50px !important;
        height: 50px !important;
        opacity: 0.4 !important;
      }
    }
  `]
})
export class FloatingPhotosComponent implements OnInit {
  photos: FloatingPhoto[] = [];

  ngOnInit() {
    console.log('FloatingPhotosComponent initialized');
    this.generatePhotos();
    console.log('Generated photos:', this.photos);
  }

  private generatePhotos() {
    const base = 'assets/images/';
    const photoFiles = [
      '20250405_230530.jpg',
      '20250406_004408.jpg',
      '20250501_214120.jpg',
      '20250501_223014.jpg',
      '20250508_203841.jpg',
      'IMG_20191122_193104.jpg',
      'IMG_20200227_173108_850.jpg',
      'IMG_20200228_215206_893.jpg',
      'IMG_20210319_113912_567.jpg',
      'IMG-20200110-WA0014.jpg',
      'IMG-20200301-WA0031.jpg',
      'IMG-20200809-WA0014.jpg',
      'IMG-20200809-WA0019.jpg',
      'IMG-20200809-WA0021.jpg',
      'IMG-20210106-WA0014.jpg',
      'Screenshot_20250412_171706_Photos.jpg'
    ];
    const photoSources = photoFiles.map(f => base + f);

    // Posiciones predefinidas distribuidas por toda la pantalla
    const positions = [
      { left: 10, top: 10 }, { left: 85, top: 15 }, { left: 15, top: 30 },
      { left: 75, top: 35 }, { left: 5, top: 50 }, { left: 90, top: 55 },
      { left: 25, top: 70 }, { left: 65, top: 75 }, { left: 45, top: 85 },
      { left: 20, top: 90 }, { left: 80, top: 90 }, { left: 50, top: 5 },
      { left: 35, top: 45 }, { left: 70, top: 60 }, { left: 15, top: 80 },
      { left: 55, top: 25 }
    ];

    this.photos = photoSources.map((src, index) => ({
      id: index + 1,
      src,
      alt: `Foto flotante ${index + 1}`,
      size: this.randomBetween(50, 80),
      left: positions[index].left,
      top: positions[index].top,
      animationDelay: this.randomBetween(0, 5),
      rotationSpeed: this.randomBetween(8, 15),
      opacity: this.randomBetween(0.4, 0.7)
    }));
    
    console.log('Photos array created:', this.photos.length);
  }

  private randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  trackByPhotoId(index: number, photo: FloatingPhoto): number {
    return photo.id;
  }

  onImageError(event: Event, photo: FloatingPhoto) {
    console.error(`Error loading image: ${photo.src}`);
  }

  onImageLoad(photo: FloatingPhoto) {
    console.log(`Image loaded: ${photo.src}`);
  }
} 