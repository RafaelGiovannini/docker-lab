import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 urlbase= environment.urlbase+ '/home'

  constructor(
    private http:HttpClient
  ) { }


  gerarImagem():Observable<any>{
    return this.http.get(this.urlbase+'/gato',{ observe: 'response', responseType: 'blob' });
  }

  gerarImagemId():Observable<any>{
    return this.http.get<any>('http://localhost:8080/gato/id')
  }
}
