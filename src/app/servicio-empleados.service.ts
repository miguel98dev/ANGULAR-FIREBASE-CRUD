import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje:string) { // registrar el servicio en app.module.ts

    alert(mensaje);
  }
}
