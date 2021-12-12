import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _url = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  getUser(){
    const url = `${this._url}/users?per_page=6`;
    return this.http.get(url)
            .pipe(
              map((resp:any) => resp['data'])
            );
  }

}
