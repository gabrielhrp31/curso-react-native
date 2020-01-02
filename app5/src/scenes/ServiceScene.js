import React, { Component } from 'react';
import {
    StyleSheet,
    Image, Text, StatusBar, View,ScrollView
} from 'react-native';
import NavigationBar from "../components/NavigationBar";

const detalhesServico = require('../img/detalhe_servico.png');


export default class ServiceScene extends Component {
    render() {
        return (
            <View style={serviceSceneStyle.index}>
                <StatusBar backgroundColor='#19D1C8'/>
                <NavigationBar navigator={this.props.navigator} color={'#19D1C8'} voltar />
                <View style={serviceSceneStyle.serviceDetails}>
                    <Image source={detalhesServico}/>
                    <Text style={serviceSceneStyle.textDetails}>Nossos Serviços</Text>
                </View>
                <View style={serviceSceneStyle.detailsContact}>
                    <Text style={serviceSceneStyle.txtService}>
                        . Consultoria
                    </Text>
                    <Text style={serviceSceneStyle.txtService}>
                        . Processos
                    </Text>
                    <Text style={serviceSceneStyle.txtService}>
                        . Acompanhamento de Projetos
                    </Text>
                </View>
            </View>

        );
    }
}

const serviceSceneStyle = StyleSheet.create({
    index: {
        backgroundColor:'#FFF',
        flex:1
    },
    serviceDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    textDetails: {
        color:'#19D1C8',
        fontSize:25,
        marginLeft: 15
    },
    detailsContact: {
        marginTop: 10,
        padding:20
    },
    txtService: {
        fontSize: 18
    }
});
