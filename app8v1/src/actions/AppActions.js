import * as types from "./types";
import firebase from '@firebase/app/'
import auth from '@firebase/auth/'
import database from '@firebase/database/'
import firestore from '@firebase/firestore/'
import AddContact from "../components/AddContact";

export const modifyEmailContact = (text)=>{
    return{
        type: types.MODIFY_EMAIL_CONTACT,
        payload: text
    }
};

export const addContact = (email)=>{
    return dispatch =>{
        dispatch({
           type:types.GETTING_CONTACT
        });
        let contact = {};
        let userId=firebase.auth().currentUser.uid;
        userId=userId.toString();
        let db = firebase.firestore();
        verifyContactExists(db,email,userId).then(
            db.collection("contacts").where('email', '==', email).get().then(snapshot => {
                snapshot.forEach(doc=>{
                    contact=doc.data();
                    if (contact){
                        db.collection("user_contacts").doc(userId).collection('contacts').add(contact)
                            .then(result=>addContactSuccess(dispatch))
                            .catch(err=>addContactError(dispatch,err));
                    }
                })
            })
            .catch(err=>addContactError(dispatch,err))
        )
        .catch(err => {
            addContactError(dispatch,err);
        });
    }
};

const verifyContactExists=(db, email,userId)=>{
    let cont = 0;
    db.collection('user_contacts').doc(userId).collection('contacts').where('email', '==', email).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                if(doc.exists){
                    cont++;
                }
            });
        })
        .catch(err => {
            return Promise.reject(err);
        });
    if(cont===0){
        return Promise.reject('Contato já adicionado');
    }else{
        return Promise.resolve('Contato Adicionado');
    }
}

const create_UUID= ()=>{
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c==='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
};

const addContactSuccess=(dispatch)=>{
    alert('ok');
    dispatch ({
        type:types.ADD_CONTACT_SUCCESS
    });
};

const addContactError=(dispatch, err)=>{
    dispatch(
        {
            type:types.ADD_CONTACT_ERROR,
            payload:err.message
        }
    );
};