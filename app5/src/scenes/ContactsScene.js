import React, { Component } from 'react';
import {
    StyleSheet,
    Image, Text, StatusBar, View
} from 'react-native';
import NavigationBar from "../components/NavigationBar";

const detalhesContatos = require('../img/detalhe_contato.png');


export default class ClientsScene extends Component {
    render() {
        return (
            <View style={contactSceneStyle.index}>
                <StatusBar backgroundColor='#61BD8C'/>
                <NavigationBar navigator={this.props.navigator} color={'#61BD8C'} voltar />
                <View style={contactSceneStyle.contactDetails}>
                    <Image source={detalhesContatos}/>
                    <Text style={contactSceneStyle.textDetails}>Nossos Clientes</Text>
                </View>
                <View style={contactSceneStyle.detailsContact}>
                    <Text style={contactSceneStyle.txtContatos}>TEL: (11) 1234-1234</Text>
                    <Text style={contactSceneStyle.txtContatos}>CEL: (11) 91234-1234</Text>
                    <Text style={contactSceneStyle.txtContatos}>EMAIL: contato@atmconsultoria.com</Text>
                </View>
            </View>

        );
    }
}

const contactSceneStyle = StyleSheet.create({
    index: {
        backgroundColor:'#FFF',
        flex:1
    },
    contactDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textDetails: {
        color:'#61BD8C',
        fontSize:25,
        marginLeft: 15
    },
    detailsContact: {
        marginTop: 20,
        padding:20
    },
    txtContatos: {
        fontSize: 18
    }
});
