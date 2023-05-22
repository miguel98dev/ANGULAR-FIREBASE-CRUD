import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css'],
})
export class ActualizarEmpleadoComponent implements OnInit {
  titulo = 'Modificar empleados';


  // le pasamos el routing e importamos el Router
  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute // rutas
  ) {}

  empleados: Empleado[] = []; // muestra los empleados desde el servicio
  accion: number;

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados; // seria lo mismo que meterlo en el constructor
    this.indice = this.route.snapshot.params['id']; // le decimos que indice sea igual al id que le pasamos a la ruta desde el module.ts
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    );
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
    this.accion = parseInt(this.route.snapshot.queryParams['accion']); // se almacena el valor que hemos pasado con queryParams que le pasamos por la URL
  }

  volverHome() {
    // accedemos el router del constructor y le pasamos navigate() y la ruta
    this.router.navigate(['']);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  indice: number;

  modificarEmpleado() {
    // creamos una función que recoge la información de los empleados. Hay que agregar miEmpleado al array de arriba

    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );

    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    this.router.navigate(['']); // al agregar el empleado redirige al home (redireccionamiento automático).
  }

  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
  }

  accionEmpleado() {
    // if (this.accion == 1) {
    //   let miEmpleado = new Empleado(
    //     this.cuadroNombre,
    //     this.cuadroApellido,
    //     this.cuadroCargo,
    //     this.cuadroSalario
    //   );

    //   this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    //   this.router.navigate(['']);
    // } else {
    //   this.empleadosService.eliminarEmpleado(this.indice);
    //   this.router.navigate(['']);
    // }

    switch (this.accion) {
      case 1:
        let miEmpleado = new Empleado(
          this.cuadroNombre,
          this.cuadroApellido,
          this.cuadroCargo,
          this.cuadroSalario
        );

        this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
        this.router.navigate(['']);
        break;

      case 2:
        this.empleadosService.eliminarEmpleado(this.indice);
        this.router.navigate(['']);
        break;
    }
  }

}
