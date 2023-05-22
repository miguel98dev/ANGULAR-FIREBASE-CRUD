import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  empleados: Empleado[] = [];
  // empleados: Empleado[] = [
  //   // class Empleado empleado.model.ts

  //   new Empleado('Juan', 'Díaz', 'Presidente', 5000),
  //   new Empleado('Ana', 'Martón', 'Directora', 3500),
  //   new Empleado('Laura', 'López', 'Jefa sección', 2800),
  // ];

  // servicio dentro de un servicio
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices) {}

  setEmpleados(misEmpleados:Empleado[]) {
    this.empleados = misEmpleados;
  }

  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }


  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Agregando persona: \n' + empleado.nombre + '\n' + empleado.salario
    );
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);

  }

  // le pasamos el mismo parámetro
  encontrarEmpleado(indice: number) {
    // igual al array de empleados y su posición (índice)
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice]; // almacenamos la información del empleado
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
    this.dataService.actualizarEmpleado(indice, empleado);
  }
  
  // método splice() agregar y eliminar elementos en js
  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
    this.dataService.eliminarEmpleado(indice);

    if (this.empleados != null) this.dataService.guardarEmpleados(this.empleados); // resuelve el problema de borrado
  }
}
