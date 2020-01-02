import React from 'react'
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import {TabBar} from 'react-native-tab-view'
import {Actions} from 'react-native-router-flux'
import {Stack} from "react-native-router-flux";
import TouchableItem from "react-native-tab-view/src/TouchableItem";

export default props=>(
    <View style={{marginBottom:4, elevation: 4}}>
        <StatusBar backgroundColor="#114D44"/>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',  backgroundColor: '#115E54'}}>
            <View style={{height: 60, justifyContent: 'center'}}>
                <Text style={{color:'#ffffff', fontSize:20, marginLeft:25}}>Whatsapp Clone</Text>
            </View>
            <View style={{flexDirection: 'row',marginRight: 20, alignItems: 'center', }}>
                <View style={{width:50}}>
                    <TouchableOpacity onPress={()=>{Actions.AddContact()}}>
                        <Image source={require('../imgs/adicionar-contato.png')}/>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={{fontSize:20, color:'#ffffff'}}>
                        Sair
                    </Text>
                </View>
            </View>
        </View>
        <TabBar  {...props} style={{backgroundColor: '#115E54', elevation:0}}/>
    </View>
);