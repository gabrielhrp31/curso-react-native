import React from 'react'
import {ActivityIndicator, ImageBackground, View} from 'react-native'

export default props => (
    <ImageBackground style={{flex:1, width: null}} source={require('../imgs/bg.png')}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color="#fff"/>
        </View>
    </ImageBackground>
)