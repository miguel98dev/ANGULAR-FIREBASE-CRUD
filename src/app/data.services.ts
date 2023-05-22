import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    // injectamos el HttpClientModule desde el constructor y el loginService

    constructor(private httpClient:HttpClient, private loginService:LoginService) {}


    cargarEmpleados() {
        const token = this.loginService.getIdToken();
        // ?auth= + token -> sirve para
       return this.httpClient.get('https://mis-clientes-6a9cd-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }

    // recibe como parámetro el array tipo Empleado creado en empleados.services
    guardarEmpleados(empleados:Empleado[]) {
        // utilizamos el objeto injectado. si reemplazamos el post por put, sobreescribe los datos que ya están registrados anteriormente, evitando duplicados
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://mis-clientes-6a9cd-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token, empleados).subscribe({ // url base de datos (añadimos datos.json) y especifamos el array
            next: response=>{console.log('Se han guardado los empleados: ' + response);},
            error: error=>{console.log('Error: ' + error)}
        });
    }
    
    // recibe como parámetros el índice del empleado y el objeto de tipo Empleado
    actualizarEmpleado(indice:number, empleado:Empleado) {
        const token = this.loginService.getIdToken();
        let url = 'https://mis-clientes-6a9cd-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth=' + token;

        this.httpClient.put(url, empleado).subscribe({ // url base de datos (añadimos datos.json) y especifamos el array
            next: response=>{console.log('Se ha modificado correctamente el empleado: ' + response);},
            error: error=>{console.log('Error: ' + error)}
        });
    }

    eliminarEmpleado(indice:number) {
        const token = this.loginService.getIdToken();
        let url = 'https://mis-clientes-6a9cd-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json?auth=' + token;

        this.httpClient.delete(url).subscribe({ // url base de datos (añadimos datos.json) y especifamos el array
            next: response=>{console.log('Se ha eliminado correctamente el empleado: ' + response);},
            error: error=>{console.log('Error: ' + error)}
        });
    }
}

