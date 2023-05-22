import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  // creamos el constructor para añadir el servicio
  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
      
  }

  agregaCaracteristicas(value: string) {

    // si comento this.miServicio sigue funcionando ya que metimos el servicio dentro del otro servicio
    this.miServicio.muestraMensaje("Caracterísitica: " + value); // llamo al constructor, le pasamos la función del servicio y el valor a mostar
    this.caracteristicasEmpleados.emit(value);
  }
}
