import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorForm!: FormGroup;
  titulo = 'Professores';
  public professorSelecionado!: Professor;
  public textoSimple!: string;


  public professores = [
    {id:1 , nome: 'Bruno', disciplina: 'MAt'},
    {id:2 , nome: 'Carla', disciplina: 'POR'},
    {id:3 , nome: 'Douglas', disciplina: 'Beer'},
    {id:4 , nome: 'Juca', disciplina: 'ING'},
    {id:5 , nome: 'Soneca', disciplina: 'ALE'},
   
  ]

  constructor(private fb: FormBuilder) { 
    this.criarForm();
  }

  ngOnInit() {
  }

  @ViewChild('exampleModal', { static: false}) exampleModal?: ElementRef
  closeProfessor(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  
  openProfessor(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display = 'block';
    document.body.classList.add('modal-open');
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }


  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar(){
    this.professorSelecionado === null;
  }
  

}
