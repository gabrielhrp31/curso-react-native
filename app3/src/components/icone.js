import {Image, Text, View, StyleSheet} from "react-native";
import React, { Component } from "react";

class Icone extends Component{
    render(){
        if(this.props.escolha==='Pedra'){
            return(
                <View style={Style.icone}>
                    <Text style={Style.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../images/pedra.png')}/>
                </View>
            )
        }else if(this.props.escolha==='Papel'){
            return(
                <View style={Style.icone}>
                    <Text style={Style.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../images/papel.png')}/>
                </View>
            )
        }else if(this.props.escolha==='Tesoura'){
            return(
                <View style={Style.icone}>
                    <Text style={Style.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../images/tesoura.png')}/>
                </View>
            )
        }else{
            return false
        }
    }
}
const Style = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom:20
    },
    txtJogador:{
        fontSize:18
    }
});

export default Icone;