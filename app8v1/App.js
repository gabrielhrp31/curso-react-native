import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import firebase from '@firebase/app/'
import ReduxThunk from 'redux-thunk'

import Routes from "./src/Routes";
import reducers from './src/reducers'
import store from './store'



export default class App extends React.Component {

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyBvPvOX93kv27zi1m9byVzdgUGAQ7JRbvg",
            authDomain: "whatsapp-clone-5cc22.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-5cc22.firebaseio.com",
            projectId: "whatsapp-clone-5cc22",
            storageBucket: "whatsapp-clone-5cc22.appspot.com",
            messagingSenderId: "113166659832"
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}