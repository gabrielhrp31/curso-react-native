/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    StatusBar
} from 'react-native';
import NavigationBar from "../components/NavigationBar";

const logo = require('../img/logo.png');
const menuCliente = require('../img/menu_cliente.png');
const menuContato = require('../img/menu_contato.png');
const menuEmpresa = require('../img/menu_empresa.png');
const menuServico = require('../img/menu_servico.png');

const goToClients = (navigator) => {
    return ()=>{
        navigator.push({id: 'ClientsScene'})
    }
};

const goToContacts = (navigator) => {
    return ()=>{
        navigator.push({id: 'ContactsScene'})
    }
};

const goToCompany = (navigator) => {
    return ()=>{
        navigator.push({id: 'CompanyScene'})
    }
};

const goToService = (navigator) => {
    return ()=>{
        navigator.push({id: 'ServiceScene'})
    }
};

export default class MainScene extends Component {

    render() {
        return (
            <View style={mainSceneStyles.index}>
                <StatusBar backgroundColor='#CCC'/>
                <View>
                    <NavigationBar color="#CCC" voltar={false} style={mainSceneStyles.navBar} />
                </View>
                <View style={mainSceneStyles.logo}>
                    <Image  source={logo}/>
                </View>
                <View style={mainSceneStyles.images}>
                    <View style={mainSceneStyles.row1}>
                        <TouchableHighlight underlayColor={'#B9C941'} activeOpacity={0.3} onPress={goToClients(this.props.navigator)}>
                            <Image source={menuCliente}/>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'#61BD8C'} activeOpacity={0.3}  onPress={goToContacts(this.props.navigator)}>
                            <Image source={menuContato}/>
                        </TouchableHighlight>
                    </View>
                    <View style={mainSceneStyles.row2}>
                        <TouchableHighlight  underlayColor={'#EC7148'} activeOpacity={0.3} onPress={goToCompany(this.props.navigator)}>
                            <Image source={menuEmpresa}/>
                        </TouchableHighlight>
                        <TouchableHighlight  underlayColor={'#19D1C8'} activeOpacity={0.3} onPress={goToService(this.props.navigator)}>
                            <Image source={menuServico}/>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const mainSceneStyles = StyleSheet.create({
    index: {
        flexDirection: 'column',
        flex:1,
        backgroundColor:'#FFF',
    },
    navBar: {
        flex:1,
    },
    logo: {
        flex: 2,
        alignItems:'center',
        justifyContent: 'center'
    },
    images: {
        flex: 6,
        justifyContent: 'flex-start',
    },
    row1: {
        flex: 2,
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent: 'space-around',
    },
    row2: {
        flex: 3,
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent: 'space-around',
    }

});