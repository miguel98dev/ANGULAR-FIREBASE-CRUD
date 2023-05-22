import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-personalizado',
  templateUrl: './error-personalizado.component.html',
  styleUrls: ['./error-personalizado.component.css']
})
export class ErrorPersonalizadoComponent implements OnInit{

  titulo = 'ErrorPersonalizado'

  constructor() {}


  ngOnInit(): void {
      
  }
}
