import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingPhotosComponent } from './shared/floating-photos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloatingPhotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaFrontEnd';
}
