import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 private urlbase = `${environment.urlbase}${environment.basepath}/cat`

  constructor(
    private http:HttpClient
  ) { }

  gerarImagem():Observable<any>{
    return this.http.get(this.urlbase,{ observe: 'response', responseType: 'blob' });
  }
}
