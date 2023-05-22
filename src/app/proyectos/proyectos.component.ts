import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  titulo = 'Listado y agregado de empleados'

  // le pasamos el routing e importamos el Router
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {

  }

  empleados:Empleado[]=[]; // muestra los empleados desde el servicio

  ngOnInit(): void {
    
    this.empleados = this.empleadosService.empleados; // seria lo mismo que meterlo en el constructor
  }

  volverHome() {
    // accedemos el router del constructor y le pasamos navigate() y la ruta
    this.router.navigate(['']);
  }

  cuadroNombre:string = '';
  cuadroApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;

  agregarEmpleado() { // creamos una función que recoge la información de los empleados. Hay que agregar miEmpleado al array de arriba

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre); // llamo al constructor, le pasamos la función del servicio
    this.empleados.push(miEmpleado); // añade a empleados lo que hay en miEmpleado
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']); // al agregar el empleado redirige al home (redireccionamiento automático).
  }
}
