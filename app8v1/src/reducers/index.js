import {combineReducers} from 'redux';
import AutenticationReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    AutenticationReducer,
    AppReducer
});