import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // importamos el auth de firebase
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // para el redireccionamiento
  constructor(private router:Router, private cookie:CookieService) { }

  // 'firma/codigo seguridad
  token:string;

  // autenticar usuario
  login(email:string, password:string) {

    firebase.auth().signInWithEmailAndPassword(email, password).then( // le indicamos que vamos a entrar mediante email y contraseña
      response=>{
        firebase.auth().currentUser?.getIdToken().then( // recoge el token del usuario que está realizando el login
          token=>{
            this.token = token;
            this.cookie.set('token', this.token);
            this.router.navigate(['/']);
          }
        )
      }
    );
  }

  getIdToken() {
    
    // return this.token;
    return this.cookie.get('token');
  }

  estaLogueado() {

    return this.cookie.get('token');
    
  }

  logout() {

    firebase.auth().signOut().then(()=>{
      this.token = '';
      this.cookie.set('token', this.token);
      this.router.navigate(['/']);
      window.location.reload();
    });
  }
}
