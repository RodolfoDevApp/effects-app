import { Action, createReducer, on } from '@ngrx/store';
import {cargarusuario,cargarusuarioError,cargarusuarioSuccess} from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    id: string | null;
    user: Usuario | null;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(cargarusuario, (state, {id}) => ({ 
        ...state,
        loading: true,
        id: id
    })),
    on(cargarusuarioSuccess, (state, {usuario}) => ({
         ...state,
          loading: false,
          loaded:true,
          user: {...usuario}
        })),
    on(cargarusuarioError, (state, {payload}) => ({
         ...state,
          loading: false,
          loaded:false,
          error: {
              url: payload.url,
              name: payload.name,
              message: payload.message,
            }
        })),

);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}