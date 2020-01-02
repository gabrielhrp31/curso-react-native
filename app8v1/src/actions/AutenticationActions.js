import firebase from '@firebase/app/'
import auth from '@firebase/auth/'
import database from '@firebase/database/'
import firestore from '@firebase/firestore/'
import {Actions} from "react-native-router-flux";
import * as types from "./types";

export const modifyName = (text) => {
    return {
        type: types.MODIFY_NAME,
        payload: text
    }
};

export const modifyEmail = (text) => {
    return {
        type: types.MODIFY_EMAIL,
        payload: text
    }
};

export const modifyPassword = (text) => {
    return {
        type: types.MODIFY_PASSWORD,
        payload: text
    }
};


export const cadastrarUsuario = ({nome, email, senha}) => {
    return dispatch => {
        dispatch(
            {
                type: types.REGISTER_IN_PROGRESS,
            }
        );
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(
            user => {
                firebase.firestore().collection('contacts').doc(firebase.auth().currentUser.uid).set({nome, email})
                    .then(value => usuarioCadastradoSucess(dispatch))
                    .catch(error => {
                        firebase.auth().currentUser.delete().then(
                            usuarioCadastradoError({
                                code: 'database/cannot-save',
                                message: 'Não foi possivel salvar os dados'
                            }, dispatch)
                        )
                    });
            })
            .catch(error => usuarioCadastradoError(error, dispatch))
    };


};

export const autenticarUsuario = ({email, senha}) => {
    return dispatch=> {
        dispatch(
            {
                type: types.LOGIN_IN_PROGRESS,
            }
        );
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(user => autenticationSucess(dispatch))
            .catch(error => autenticationError(dispatch, error))
    };
};

const autenticationSucess = (dispatch) =>{
    dispatch(
        {
            type: types.AUTENTICATION_SUCESS
        }
    );
    Actions.Home();
};

const autenticationError = (dispatch, error) =>{
    let errorMessage='';
    switch (error.code) {
        case 'auth/invalid-email':
            errorMessage = 'O endereço de email não é válido!';
            break;
        case 'auth/user-disabled':
            errorMessage = 'O email fornecido foi desativado!';
            break;
        case 'auth/user-not-found':
            errorMessage = 'Nenhum usuário correspondente ao email fornecido!';
            break;
        case 'auth/wrong-password':
            errorMessage = 'A senha é inválida para o email fornecido!';
            break;
        default:
            errorMessage = error.message;
            break;
    }
    dispatch(
        {
            type: types.AUTENTICATION_ERROR,
            payload: errorMessage
        }
    );
};

const usuarioCadastradoSucess = (dispatch) => {
    dispatch(
        {
            type: types.REGISTER_SUCESS
        }
    );
    Actions.Welcome();

};

const usuarioCadastradoError = (error, dispatch) => {
    let errorMessage = '';
    switch (error.code) {
        case 'auth/email-already-in-use':
            errorMessage = 'Este e-mail já está cadastrado!';
            break;
        case 'auth/invalid-email':
            errorMessage = 'Este e-mail é invalido!';
            break;
        case 'auth/operation-not-allowed':
            errorMessage = 'Tipo de autenticação desativado!';
            break;
        case 'auth/weak-password':
            errorMessage = 'Esta senha é muito curta!';
            break;
        default:
            errorMessage = error.message;
            break;
    }
    dispatch(
        {
            type: types.REGISTER_ERROR,
            payload: errorMessage
        }
    )
};