import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-diretvas',
  templateUrl: './teste-diretvas.component.html',
  styleUrls: ['./teste-diretvas.component.css']
})
export class TesteDiretvasComponent implements OnInit {

  mostrarCursos = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
