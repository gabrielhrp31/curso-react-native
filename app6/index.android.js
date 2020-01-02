/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Routes from './src/Router';

export default class app6 extends Component {
  render() {
    return (
        <Routes />
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
