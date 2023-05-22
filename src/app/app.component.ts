import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  


  // creamos el constructor para añadir el servicio
  constructor(private loginService:LoginService, private cookie:CookieService) {

    
  }
  ngOnInit(): void {
    
    firebase.initializeApp({
      apiKey: "AIzaSyA4Cz507SF9kBhh7dZDhjmYHkfoVPfN3kE",
      authDomain: "mis-clientes-6a9cd.firebaseapp.com",
    })
  }

  estaLogueado() {

    return this.loginService.estaLogueado();
  }

  logout() {

    this.loginService.logout();
  }

 


}
