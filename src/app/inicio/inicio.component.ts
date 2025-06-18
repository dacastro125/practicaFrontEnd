import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf
import { RouterLink } from '@angular/router';   // Necesario para routerLink

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink], // <-- Importa aquí los módulos
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  textoCompleto: string = 'HOLA, ¿CÓMO ESTÁS?'; // 
  textoMostrado: string = '';
  mostrarBotones: boolean = false;
  mostrarCursor: boolean = true;

  ngOnInit(): void {
    this.efectoEscritura();
  }

  efectoEscritura() {
    let i = 0;
    const velocidad = 60; // Velocidad más rápida (era 80)
    
    const intervalo = setInterval(() => {
      if (i < this.textoCompleto.length) {
        this.textoMostrado += this.textoCompleto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        this.mostrarCursor = false; // Oculta el cursor al terminar
        this.mostrarBotones = true; // Muestra los botones al terminar
      }
    }, velocidad);
  }
}