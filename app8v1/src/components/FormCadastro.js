import React from 'react';
import {View, TextInput, Text, Button, ImageBackground, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {modifyPassword, modifyEmail, modifyName, cadastrarUsuario} from "../actions/AutenticationActions";

class formCadastro extends React.Component {

    constructor(props) {
        super(props);
    }


    _cadastrarUsuario() {
        const {nome, email, senha} = this.props;
        this.props.cadastrarUsuario({nome, email, senha});
    }

    renderBtnCadastrar(){
        if(this.props.loadingRegister){
            return(
                <ActivityIndicator/>
            )
        }else{
            return(
            <Button
                title="Cadastrar"
                color="#115E54"
                onPress={() => this._cadastrarUsuario()}/>
            )
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../imgs/bg.png')}
                style={{flex: 1, width: null}}
            >
                <View style={{flex: 1, padding: 10}}>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                        <TextInput
                            value={this.props.nome} placeholder="Nome"
                            placeholderTextColor='#fff'
                            onChangeText={(text) => this.props.modifyName(text)}
                            style={{fontSize: 20, height: 45, borderBottomColor: '#fff', borderBottomWidth: 1}}
                        />
                        <TextInput
                            value={this.props.email}
                            placeholder="E-mail"
                            placeholderTextColor='#fff'
                            onChangeText={(text) => this.props.modifyEmail(text)}
                            style={{fontSize: 20, height: 45, borderBottomColor: '#fff', borderBottomWidth: 1}}
                        />
                        <TextInput
                            value={this.props.senha}
                            placeholder="Senha"
                            placeholderTextColor='#fff'
                            secureTextEntry
                            onChangeText={(text) => this.props.modifyPassword(text)}
                            style={{fontSize: 20, height: 45, borderBottomColor: '#fff', borderBottomWidth: 1}}
                        />
                        <Text
                            style={{color:"#ff0000", fontSize: 18, marginTop:5, textAlign:'center'}}
                        >
                            {this.props.registerError}
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                        {this.renderBtnCadastrar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticationReducer.nome,
        email: state.AutenticationReducer.email,
        senha: state.AutenticationReducer.senha,
        registerError:state.AutenticationReducer.registerError,
        loadingRegister:state.AutenticationReducer.loadingRegister
    }
);

export default connect(
    mapStateToProps,
    {
        modifyEmail,
        modifyPassword,
        modifyName,
        cadastrarUsuario
    }
)(formCadastro);