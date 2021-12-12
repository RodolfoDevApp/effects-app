import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error:any;
  constructor(
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
  this.store.select('usuarios')
    .subscribe(({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    })
    this.store.dispatch( cargarUsuarios() );
    // this.usuarioService.getUser()
    //   .subscribe( data => {
    //     console.log('data: ', data);
    //     this.usuarios = data;
    //   });
  }

}
