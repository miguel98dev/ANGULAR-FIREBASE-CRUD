import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model'; // importamos el empleado.model que hemos creado(se suele importa solo al crearlo en la CLI)
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { 

    // this.empleados = this.empleadosService.empleados; // muestra los empleados desde el servicio
  }

  ngOnInit(): void {
     
    // this.empleados = this.empleadosService.empleados; // seria lo mismo que meterlo en el constructor
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);
      this.empleados = Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });
  }

  empleados:Empleado[]=[]; // muestra los empleados desde el servicio

  // empleados:Empleado[]=[ // class Empleado empleado.model.ts

  //   new Empleado("Juan", "Díaz", "Presidente", 5000),
  //   new Empleado("Ana","Martón", "Directora", 3500),
  //   new Empleado("Laura", "López", "Jefa sección", 2800)
  // ];

  cuadroNombre:string = '';
  cuadroApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;

  agregarEmpleado() { // creamos una función que recoge la información de los empleados. Hay que agregar miEmpleado al array de arriba

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  //   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre); // llamo al constructor, le pasamos la función del servicio
  //   this.empleados.push(miEmpleado); // añade a empleados lo que hay en miEmpleado
    this.empleadosService.agregarEmpleadoServicio(miEmpleado); // agrega empleados mediante servicios

  }
}

