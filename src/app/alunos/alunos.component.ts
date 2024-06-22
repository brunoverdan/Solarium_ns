import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  
  public alunoForm!: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado!: Aluno;
  public textoSimple!: string;

  public alunos = [
    { id:1, nome: 'Marta', sobrenome: 'Maria', telefone: 988041349},
    { id:2, nome: 'Paula', sobrenome: 'Jose', telefone: 988041843},
    { id:3, nome: 'Laura', sobrenome: 'Antonio', telefone: 988541849},
    { id:4, nome: 'Luiza', sobrenome: 'Joao', telefone: 988023849},
    { id:5, nome: 'Lucas', sobrenome: 'Mary', telefone: 988041868},
    { id:6, nome: 'Pedro', sobrenome: 'Pedreira', telefone: 988043449},
    { id:7, nome: 'Paulo', sobrenome: 'Paulada', telefone: 9880434239},
  ];

  
 constructor(private fb: FormBuilder) { 
    this.criarForm();
  }

  ngOnInit() {
  }

  @ViewChild('exampleModal', { static: false}) exampleModal?: ElementRef
  close(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  
  open(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display = 'block';
    document.body.classList.add('modal-open');
  }


  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
     this.alunoSelecionado  != null;
  }

  

}
