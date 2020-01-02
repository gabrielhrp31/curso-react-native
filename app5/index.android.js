/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import ClientsScene from "./src/scenes/ClientsScene";
import MainScene from "./src/scenes/MainScene";
import ContactsScene from "./src/scenes/ContactsScene";
import CompanyScene from "./src/scenes/CompanyScene";
import ServiceScene from "./src/scenes/ServiceScene";


export default class app5 extends Component {
  render() {
    return (
        <Navigator initialRoute={{id:"MainScene"}}
           renderScene={(route,navigator) => {
               switch (route.id) {
                   case 'MainScene':
                       return(
                           <MainScene navigator={navigator}/>
                       );
                   case 'ClientsScene':
                       return(
                           <ClientsScene navigator={navigator}/>
                       );
                   case 'ContactsScene':
                       return(
                           <ContactsScene navigator={navigator}/>
                       );
                   case 'CompanyScene':
                       return(
                           <CompanyScene navigator={navigator}/>
                       );
                   case 'ServiceScene':
                       return(
                           <ServiceScene navigator={navigator}/>
                       );
               }
           }}
        />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app5', () => app5);
