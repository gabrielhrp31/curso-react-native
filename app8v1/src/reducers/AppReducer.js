import * as types from '../actions/types'

const INITIAL_STATE = {
    emailContact: 'gabrielws31@hotmail.com',
    addContactError: '',
    gettingContact:false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.MODIFY_EMAIL_CONTACT:
            return{...state, emailContact: action.payload};
        case types.ADD_CONTACT:
            return{...state, emailContact: action.payload};
        case types.ADD_CONTACT_ERROR:
            return{...state, addContactError: action.payload, gettingContact: false};
        case types.ADD_CONTACT_SUCCESS:
            return{...state, gettingContact: false};
        case types.GETTING_CONTACT:
            return{...state, gettingContact: true};
        default:
            return state;
    }
}