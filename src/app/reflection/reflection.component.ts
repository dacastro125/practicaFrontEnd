import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reflection',
  imports: [CommonModule, RouterLink],
  templateUrl: './reflection.component.html',
  styleUrl: './reflection.component.css'
})
export class ReflectionComponent implements OnInit {
  textoCompleto: string = `Este tiempo que tenemos, sé que lo usaremos para reflexionar, para aprender y para entender lo que necesitamos. No te juzgues con tanta dureza; en cambio, date     permiso     para     sentir,     pero     también     para     sanar. Con el tiempo y el trabajo interno, podrás superar esto y encontrar la paz. Somos fuertes y podemos con esto.

Tienes claro que te amo muchísimo, ¿cierto?`;
  textoMostrado: string = '';
  mostrarBotones: boolean = false;
  mostrarCursor: boolean = true;

  ngOnInit(): void {
    this.efectoEscritura();
  }

  efectoEscritura() {
    let i = 0;
    const velocidad = 25; // Velocidad más rápida para texto largo (era 30)
    
    const intervalo = setInterval(() => {
      if (i < this.textoCompleto.length) {
        this.textoMostrado += this.textoCompleto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        this.mostrarCursor = false; // Oculta el cursor al terminar
        this.mostrarBotones = true;
      }
    }, velocidad);
  }
}
