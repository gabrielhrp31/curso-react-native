import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';

import Top from './src/components/top.js'
import Icone from './src/components/icone.js'

class app3 extends Component {

    constructor(props) {
        super(props);
        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: ''};
    }

    jokenpo (escolhaUsuario){
        var numeroAleatorio = Math.random()*3;
        var escolhaComputador='';
        var resultado='';
        numeroAleatorio = Math.floor(numeroAleatorio);
        if(numeroAleatorio===0){
            escolhaComputador='Pedra';
        }else if(numeroAleatorio===1){
            escolhaComputador='Papel';
        }else{
            escolhaComputador='Tesoura'
        }
        if(escolhaComputador===escolhaUsuario){
            resultado='Empate';
        }else if(escolhaComputador==='Pedra'){
            if(escolhaUsuario==='Tesoura'){
                resultado='Perdeu'
            }else{
                resultado='Ganhou'
            }
        }else if(escolhaComputador==='Papel'){
            if(escolhaUsuario==='Tesoura'){
                resultado='Ganhou'
            }else{
                resultado='Perdeu'
            }
        }else{
            if(escolhaUsuario==='Pedra'){
                resultado='Ganhou'
            }else{
                resultado='Perdeu'
            }
        }
        this.setState({escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado : resultado});
    }

    render(){
        return(
            <View>
                <Top> </Top>
                <View style={Style.actionPanel}>
                    <View style={Style.btnEscolha}>
                        <Button title='Tesoura' onPress={()=>this.jokenpo('Tesoura')} />
                    </View>
                    <View style={Style.btnEscolha}>
                        <Button title='Papel' onPress={()=>this.jokenpo('Papel')} />
                    </View>
                    <View style={Style.btnEscolha}>
                        <Button title='Pedra' onPress={()=>this.jokenpo('Pedra')} />
                    </View>
                </View>
                <View style={Style.palco}>
                    <Text style={Style.txtResult}>{this.state.resultado}</Text>
                    <Icone escolha={this.state.escolhaComputador} jogador='Computador'> </Icone>
                    <Icone escolha={this.state.escolhaUsuario} jogador='Usuário'> </Icone>
                </View>
            </View>
        );
    }
}

const Style = StyleSheet.create({
    btnEscolha: {

        width:90
    },
    actionPanel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    palco:{
        alignItems: 'center',
        marginTop: 20
    },
    txtResult: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    }
});
AppRegistry.registerComponent('app3', () => app3);
