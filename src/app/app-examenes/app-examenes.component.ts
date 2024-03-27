import { Component } from '@angular/core';

@Component({
  selector: 'app-app-examenes',
  templateUrl: './app-examenes.component.html',
  styleUrl: './app-examenes.component.scss'
})
export class AppExamenesComponent {
  hasError= true;

  status:'confirmados' | 'cancelados' | 'pendientes' = 'confirmados';


  alternarError() {
    this.hasError = !this.hasError;
  }

  onSelectChange(ev: Event) {
    console.log(ev);
    
    const elemento= ev.target as HTMLSelectElement;
    const valor = elemento.value as
    | 'confirmados'
    | 'cancelados'
    | 'pendientes';

    this.status = valor;
  }

  examen= new Date(2024,4,15)

}

