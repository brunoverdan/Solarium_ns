import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public titulo = 'Dashboards';

  public dashboards = [
    { nome: 'Ad 01 '},
    { nome: 'DD 02'},
    { nome: 'd03'},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
