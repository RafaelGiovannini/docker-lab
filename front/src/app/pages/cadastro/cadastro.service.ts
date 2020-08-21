import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http:HttpClient) { }

  private urlBase = `${environment.urlbase}${environment.basepath}/auth`

  cadastar(user):Observable<any>{
    return this.http.post<any>(this.urlBase +'/register', user)
  }
}
