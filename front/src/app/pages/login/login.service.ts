import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userDataSubject: BehaviorSubject<any>;
  public userData: Observable<any>
  
  url = environment.urlbase + '/auth'

  constructor(
    private http: HttpClient,
    private router:Router
  ) {

    this.userDataSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("user")));
    this.userData = this.userDataSubject.asObservable();


  }


  public get userDataValue() {
    return this.userDataSubject.value;
  }

  login(user): Observable<any> {
    return this.http.post<any>(this.url + '/login', user)
      .pipe(map(user => {
        sessionStorage.setItem("user", JSON.stringify(user.user));
        this.userDataSubject.next(user);
      }))
  }


  
  logout(){
    sessionStorage.removeItem('user');
    this.userDataSubject.next(null);
    this.router.navigate(['/login']);;
  }
}
