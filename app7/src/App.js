/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {Panel, Result, Top} from './components'

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {result: ''};
        this.atualizaDisplay =  this.atualizaDisplay.bind(this);
    }

    atualizaDisplay(result){
        this.setState({result: result})
    }


    render() {
        return(
            <View style={styles.container}>
                <Top />
                <Result result={this.state.result} />
                <Panel atualizaDisplay={this.atualizaDisplay}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
