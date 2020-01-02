import * as types from '../actions/types'

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    registerError:'',
    loginError:'',
    loadingLogin:false,
        loadingRegister:false
    };

    export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
        case types.MODIFY_NAME:
            return { ...state, nome: action.payload } ;
        case types.MODIFY_EMAIL:
            return { ...state, email: action.payload };
        case types.MODIFY_PASSWORD:
            return { ...state, senha: action.payload };
        case types.REGISTER_ERROR:
            return { ...state, registerError: action.payload, loadingRegister: false};
        case types.REGISTER_SUCESS:
            return { ...state, nome: '', senha:'', loadingRegister:false};
        case types.AUTENTICATION_ERROR:
            return { ...state, loginError: action.payload, loadingLogin: false } ;
        case types.AUTENTICATION_SUCESS:
            return {...state,  loadingLogin: false} ;
        case types.LOGIN_IN_PROGRESS:
            return {...state, loadingLogin: true};
        case types.REGISTER_IN_PROGRESS:
            return {...state, loadingRegister: true};
        default:
            return state;
    }
}