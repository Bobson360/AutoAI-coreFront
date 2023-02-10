import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any = null;
  constructor(private http: HttpClient, private router: Router,) { }

  // async login(username: string, password: string) {
  //   const response:any = await this.http.post<{token: string}>('https://api.example.com/login', {username, password}).toPromise();
  //   return response.token;
  //   // return "foishsdfjog~hfuçi"
  // }

  login({ email, password }): Observable<any> {
    console.log(url);
    return this.httpClient
      .post<any>(url + '/admin', { email, password })
      .pipe(
        tap((resposta) => {
          console.log(resposta);
          // if(!resposta.sucesso) {
          //   console.log("resposta sem sucesso")
          //   return;
          // }
          localStorage.setItem(
            'token',
            btoa(JSON.stringify(resposta['token']))
          );
          this.user = email;
          // localStorage.setItem('usuario', btoa(JSON.stringify(resposta['usuario'])));
          this.router.navigate(['/']);
        })
      );
    // return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
    //   if(!resposta.sucesso) return;
    //   localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
    //   localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
    //   this.router.navigate(['']);
    // }));
  }
}
