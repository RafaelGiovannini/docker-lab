import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http:HttpClient) { }

  urlBase = environment.urlbase+'/auth'

  cadastar(user):Observable<any>{
    console.log(user)
    return this.http.post<any>(this.urlBase +'/register', user)
  }
  buscarUsuario():Observable<any>{
    return this.http.get<any>('http://localhost:8080/cadastro/id')
  }

}
