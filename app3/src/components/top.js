import {Image, View} from "react-native";
import React, { Component } from "react";

class Top extends Component{
    render() {
        return(
            <View>
                <Image source={require('../../images/jokenpo.png')}/>
            </View>
        );
    }
}
export default Top