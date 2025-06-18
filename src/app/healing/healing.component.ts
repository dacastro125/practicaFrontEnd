import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-healing',
  imports: [CommonModule],
  templateUrl: './healing.component.html',
  styleUrl: './healing.component.css'
})
export class HealingComponent implements OnInit {
  textoCompleto: string = `Espero que puedas sanar, ya no puedo ver el día que vuelva a ver esos hermosos ojos café con y esa sonrisa que me cautiva cada vez que la veo.`;
  textoMostrado: string = '';
  mostrarCursor: boolean = true;

  ngOnInit(): void {
    this.efectoEscritura();
  }

  efectoEscritura() {
    let i = 0;
    const velocidad = 40;
    
    const intervalo = setInterval(() => {
      if (i < this.textoCompleto.length) {
        this.textoMostrado += this.textoCompleto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        this.mostrarCursor = false;
      }
    }, velocidad);
  }
}
