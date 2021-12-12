import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import { cargarusuarioError,cargarusuarioSuccess,cargarusuario } from "../actions";

@Injectable()
export class UsuarioEffects{
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService        
    ){}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarusuario),
            tap( data => console.log('efect tap ', data) ),
            mergeMap(
                (action) => this.usuarioService.getUserById(action.id)
                    .pipe(
                        // tap( data => console.log('getUsers effect ', data) )
                        map( usuario => cargarusuarioSuccess({usuario}) ),
                        catchError( err => of(cargarusuarioError({payload: err})) )
                    )
            )
        )
    );

}