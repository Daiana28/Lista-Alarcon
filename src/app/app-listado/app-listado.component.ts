import { Component } from '@angular/core';

@Component({
  selector: 'app-app-listado',
  templateUrl: './app-listado.component.html',
  styleUrl: './app-listado.component.scss'
})
export class AppListadoComponent {
  hasError= true;

  students= ['Alarcón Juan Carlos', 'Araóz Agustina','Cóceres Antonella','Ferro María Laura','Jimenez Fernando',
  'Leguiza Antonella','Mauro Macarena','Paradela Carolina','Prandi Martín','Sanchez Candela','Sbarra Julieta'];
  
  mostrarListado= false;

  ocultarFrase= false;

  status:'confirmados' | 'cancelados' | 'pendientes' = 'confirmados';



  alternarError() {
    this.hasError = !this.hasError;
  }


}
