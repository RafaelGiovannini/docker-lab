import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cadastroService:CadastroService,
    private snackBar:MatSnackBar) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.cadastroForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      idade: ['',Validators.required],
      senha: ['',Validators.required],
      email: [''],
    });
  }

  cadastrar(){

    if(!this.cadastroForm.valid){
      return;
    }
    const user = this.cadastroForm.getRawValue();

    this.cadastroService.cadastar(user).subscribe(res=>{
      this.router.navigate(['/login'])
    }, error=>{
     
      this.snackBar.open(error.error.message, 'Sair', {
        duration: 3000
      });
    })
  }

  IrParaLogin(){
    this.router.navigate(['/login'])
  }

}
