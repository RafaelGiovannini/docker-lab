import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { HomeService } from './home.service';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  imagem
  user

  constructor(
    private loginService:LoginService,
    private homeService:HomeService,
    private sanitizer: DomSanitizer
    ) { }

  
  ngOnInit(): void {

    this.user = this.loginService.userDataValue

  }

  gerarImagem(){
    this.homeService.gerarImagem()
    .subscribe(res=>{
     const url = window.URL.createObjectURL(res);
     this.imagem = this.sanitizer.bypassSecurityTrustUrl(url);
    
    })
  }

  sair(){
      this.loginService.logout();
  }

}
