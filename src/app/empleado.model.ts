export class Empleado{ // creamos la clase Empleado y el constructor para posteriormente poder crear empleados y añadirlos a la clase

    nombre:string = '';
    apellido:string = '';
    cargo:string = '';
    salario:number = 0;

    constructor(nombre:string, apellido:string, cargo:string, salario:number) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
    }
}