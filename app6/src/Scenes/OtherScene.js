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

export default class OtherScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.textBody}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu.
                        Nisl vel pretium lectus quam. In vitae turpis massa sed elementum tempus egestas sed sed.
                        Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Lobortis scelerisque
                        fermentum dui faucibus in ornare quam viverra orci. In eu mi bibendum neque egestas congue
                        quisque egestas. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Nisi vitae
                        suscipit tellus mauris a diam. Ut eu sem integer vitae justo eget magna.
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