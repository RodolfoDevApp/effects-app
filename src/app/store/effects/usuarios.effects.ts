import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import { cargarUsuarios,cargarUsuariosSuccess,cargarUsuariosError } from "../actions";

@Injectable()
export class UsuariosEffects{
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService        
    ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(cargarUsuarios),
            tap( data => console.log('efect tap ', data) ),
            mergeMap(
                () => this.usuarioService.getUser()
                    .pipe(
                        // tap( data => console.log('getUsers effect ', data) )
                        map( usuarios => cargarUsuariosSuccess({usuarios}) ),
                        catchError( err => of(cargarUsuariosError({payload: err})) )
                    )
            )
        )
    );

}