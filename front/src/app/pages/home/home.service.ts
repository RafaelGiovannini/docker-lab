import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(
    private http:HttpClient
  ) { }


  gerarImagem():Observable<any>{
    return this.http.get<any>('http://localhost:8080/gato')
  }

  gerarImagemId():Observable<any>{
    return this.http.get<any>('http://localhost:8080/gato/id')
  }
}
