/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

const goBack= (navigator)=>{
    navigator.pop();
};

export default class NavigationBar extends Component {

    render() {
        if(this.props.voltar){
            return (
                <View style={{
                    backgroundColor:this.props.color,
                    flexDirection:'row',
                    padding: 10,
                    height: 60
                }} >
                    <TouchableHighlight underlayColor={this.props.color} activeOpacity={0.3} onPress={()=>{goBack(this.props.navigator);}}>
                        <Image style={navBarStyles.btnBack} source={require('../img/btn_voltar.png')}/>
                    </TouchableHighlight>
                        <Text style={navBarStyles.title}>ATM Consultoria</Text>
                </View>
            );
        }else{
            return (
                <View style={{
                    backgroundColor:this.props.color,
                    flexDirection:'row',
                    padding: 10,
                    height: 60
                }} >
                    <Text style={navBarStyles.title}>ATM Consultoria</Text>
                </View>
            );
        }
    }
}

const navBarStyles = StyleSheet.create({
    btnBack: {
        flex:1,
        alignSelf: 'flex-start'
    },
    title: {
        fontSize:18,
        flex: 9,
        textAlign: 'center',
        alignSelf: 'center',
        color:'#000'
    }
});