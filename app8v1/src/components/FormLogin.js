import React from 'react';
import { View, Text,ImageBackground , TextInput, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modifyEmail, modifyPassword, autenticarUsuario } from '../actions/AutenticationActions';

class formLogin extends React.Component {

    _autenticarUsuario(){
        const {email,senha} = this.props;
        this.props.autenticarUsuario({email,senha});
    }

    renderBtnLogin(){
        if(this.props.loadingLogin){
            return(
                <ActivityIndicator size="large"/>
            )
        }else{
            return(
                <Button title="Acessar" color='#115E54' onPress={() => this._autenticarUsuario()} />
            )
        }
    }

    render(){
        return (
            <ImageBackground style={{flex:1, width: null}} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, backgroundColor:'transparent', color:'#fff'}}>WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2}}>
                        <TextInput value={this.props.email} style={{ fontSize: 20, height: 45, borderBottomColor:'#fff', borderBottomWidth:1 }} placeholder='E-mail' placeholderTextColor='#fff' onChangeText={texto => this.props.modifyEmail(texto) } />
                        <TextInput value={this.props.senha} style={{ fontSize: 20, height: 45, borderBottomColor:'#fff', borderBottomWidth:1,  marginTop:10  }} placeholder='Senha' placeholderTextColor='#fff' secureTextEntry onChangeText={texto => this.props.modifyPassword(texto) } />
                        <Text style={{color:'#ff0000',fontSize:18,marginVertical:10, textAlign:'center'}}> {this.props.loginError}</Text>
                        <TouchableOpacity onPress={() => Actions.formCadastro() }>
                            <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', marginTop:10 }}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2}}>
                        {this.renderBtnLogin()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticationReducer.email,
        senha: state.AutenticationReducer.senha,
        loginError: state.AutenticationReducer.loginError,
        loadingLogin: state.AutenticationReducer.loadingLogin
    }
);

export default connect(mapStateToProps, { modifyEmail, modifyPassword, autenticarUsuario })(formLogin);