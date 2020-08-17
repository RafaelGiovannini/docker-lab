import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private snackBar:MatSnackBar) {

      if (this.loginService.userDataValue) { 
        this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    this.createForm();
  }

  login() {
    const user = this.loginForm.getRawValue();
    console.log(user)

    this.loginService.login(user)
      .subscribe(res => {
        this.router.navigate(['/home'])
      }, error=>{
        this.snackBar.open(error.error.message, 'Sair', {
          duration: 3000
        });
      })


  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      usuario: [''],
      senha: ['']
    });
  }

  IrParaCadastro() {
    this.router.navigate(['/cadastro'])
  }

}
