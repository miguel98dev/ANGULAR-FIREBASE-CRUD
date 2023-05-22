import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  // le decimos que va a recibir un dato y su tipo(clase) del component.html del padre
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

  constructor() { }

  ngOnInit(): void {
      
  }
}
