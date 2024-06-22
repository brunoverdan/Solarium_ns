import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public titulo = 'Perfils';

  public perfils = [
    { nome: 'ADM'},
    { nome: 'Diretor'},
    { nome: 'usuario'},
    
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
