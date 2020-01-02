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
    TouchableHighlight
} from 'react-native';
import {Actions} from "react-native-router-flux";

const logo=require('../imgs/logo.png');
const btnJogar=require('../imgs/botao_jogar.png');
const btnSobre=require('../imgs/sobre_jogo.png');
const btnOutros=require('../imgs/outros_jogos.png');

const goToOther = ()=>{
    Actions.other();
};
const goToAbout = ()=>{
    Actions.about();
};
const goToResult= ()=>{
    Actions.result();
};
export default class MainScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.middle}>
                    <Image  source={logo}/>
                    <TouchableHighlight style={{marginTop:30}} onPress={()=>{goToResult();}} >
                        <Image  source={btnJogar}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.bottom}>
                    <TouchableHighlight style={styles.sobre} onPress={()=>{goToAbout();}}>
                        <Image  source={btnSobre}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.outros} onPress={()=>{goToOther();}}>
                        <Image  source={btnOutros}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61BD8C',
    },
    middle: {
        flex:8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    outros: {
        marginRight:10
    },
    sobre: {
        marginLeft: 10
    }

});
