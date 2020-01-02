import React from "react";
import {Router, Stack, Scene} from 'react-native-router-flux';
import {StatusBar} from 'react-native';
import FormLogin from "./components/FormLogin";
import FormCadastro from "./components/FormCadastro";
import Welcome from "./components/Welcome";
import Home from "./components/Home"
import firebase from '@firebase/app/'
import auth from '@firebase/auth/'
import Loading from "./components/Loading";
import AddContact from "./components/AddContact";

export default class Routes extends React.Component{
        constructor(props) {
            super(props);
            this.state = {authenticated: false, loading:true}
        }

        componentDidMount() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({authenticated: true, loading:false});
                } else {
                    this.setState({authenticated: false, loading:false });
                }
            })
        }

        render() {
                return (
                    <Router navigationBarStyle={{backgroundColor: '#115E54',}} navBarButtonColor='#fff' titleStyle={{color: '#fff'}}>
                        <Stack key="root">
                            <Scene key='Loading' hideNavBar component={Loading} initial={this.state.loading} title={'Loading'}/>
                            <Scene key='formLogin' hideNavBar component={FormLogin} initial={!this.state.authenticated && !this.state.loading} title={'Login'}/>
                            <Scene key='formCadastro' component={FormCadastro} title={'Cadastro'}/>
                            <Scene key='Welcome' component={Welcome} hideNavBar title={'Welcome'}/>
                            <Scene key='Home' component={Home} initial={this.state.authenticated} hideNavBar title={'Home'}/>
                            <Scene key='AddContact' component={AddContact} title={'Adicionar Contatos'}/>
                        </Stack>
                    </Router>
                );
        };

};
