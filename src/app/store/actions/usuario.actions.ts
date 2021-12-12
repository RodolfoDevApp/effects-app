import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarusuario = createAction(
    '[usuario] cargar usuario',
    props<{ id: string }>()
    );

export const cargarusuarioSuccess = createAction(
    '[usuario] cargar usuario Success',
    props<{ usuario: Usuario }>()
    );

export const cargarusuarioError = createAction(
    '[usuario] cargar usuario Error',
    props<{ payload: any }>()
    );