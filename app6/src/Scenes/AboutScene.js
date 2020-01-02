/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class AboutScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.textBody}>
                        Ao clicar em jogar o jogo sorteia cara ou coroa atrvés de numéros aleatórios gerados pelo computador
                    </Text>
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
    navBar:{
        flex:1
    },
    body: {
        flex:9,
        alignItems: 'center',
        marginTop:20,
        justifyContent: 'flex-start'
    },
    textBody: {
        color:'#fff',
        paddingHorizontal: 20
    }
});