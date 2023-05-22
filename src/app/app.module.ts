import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component' // importamos el modulo de HttpClientModule
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';





// ROUTING: después de crear los componentes, venimos a module.ts y registramos en declarations los nuevos modulos(angular lo hace sólo normalmente)

// 1. crear rutas (Routes): crear un objeto por cada ruta, luego ir a imports para importar el RouterModule
// 2. para que angular use las rutas en RouterModule se añade forRoot y la constante creada
// 3. mover todo lo de app.component al home y decirle a app.component que se encargue de enrutar los componentes creados
// 4. vamos al template de app.component y lo movemos al de home y mover todo el contenido del component ts al home ts menos los @Component
// 5. cambiar las rutas de las importaciones con dos puntos delante y ya funcionaría
// 6. ir al template de app.component y ponemos <router-outlet></router-outlet>
// 7. para que funcione la navbar vamos al template principal y modificamos los href

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'quienes', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent, canActivate:[LoginGuardian] }, // contacto esta protegido por el guardian
  { path: 'actualizar/:id', component: ActualizarEmpleadoComponent }, //le pasamos la ruta y que recoja el id también
  { path: 'login', component:LoginComponent },
  { path: '**', component: ErrorPersonalizadoComponent } // le indicamos a angular que cualquier cosa diferente a las rutas ya creadas, dará error
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    ActualizarEmpleadoComponent,
    ErrorPersonalizadoComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent],
})
export class AppModule {}
