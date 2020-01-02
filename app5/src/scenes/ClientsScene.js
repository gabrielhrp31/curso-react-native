/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image, Text, StatusBar, View
} from 'react-native';
import NavigationBar from "../components/NavigationBar";

const detalhesCliente = require('../img/detalhe_cliente.png');
const cliente1 = require('../img/cliente1.png');
const cliente2 = require('../img/cliente2.png');


export default class ClientsScene extends Component {
    render() {
        return (
            <View style={clientSceneStyle.index}>
                <StatusBar backgroundColor='#B9C941'/>
                <NavigationBar navigator={this.props.navigator} color={'#B9C941'} voltar />
                <View style={clientSceneStyle.clientDetails}>
                    <Image source={detalhesCliente}/>
                    <Text style={clientSceneStyle.textDetails}>Nossos Clientes</Text>
                </View>
                <View style={clientSceneStyle.client}>
                    <Image source={cliente1}/>
                    <Text style={clientSceneStyle.clientText}>Lorem Ipsum dolorem</Text>
                </View>
                <View style={clientSceneStyle.client}>
                    <Image source={cliente2}/>
                    <Text style={clientSceneStyle.clientText}>Lorem Ipsum dolorem</Text>
                </View>
            </View>

        );
    }
}

const clientSceneStyle = StyleSheet.create({
    index: {
      backgroundColor:'#FFF',
        flex:1
    },
    clientDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textDetails: {
        color:'#B9C941',
        fontSize:25,
        marginLeft: 15
    },
    client:{
        marginTop:20,
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    clientText: {
        marginLeft: 30,
    }
});
