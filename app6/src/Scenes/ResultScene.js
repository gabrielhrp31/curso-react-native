/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Image, StyleSheet,
    View
} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class ResultScene extends Component {

    constructor(props){
        super(props);
        this.state = {resultado: ''};
    }

    componentWillMount(): void {
        const numeroAleatorio = Math.floor(Math.random()*2);
        let caraOuCoroa =  '';
        if (numeroAleatorio===0){
            caraOuCoroa= 'cara';
        } else {
            caraOuCoroa='coroa';
        }

        this.setState({resultado: caraOuCoroa});
    }

    render() {
        if(this.state.resultado==='cara'){
            return (
                <View style={styles.container}>
                    <Image style={styles.image} source={cara}/>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={coroa}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width:250,
        height: 250
    }
});
