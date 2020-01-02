import  React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


export default class Display extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View style={styles.display}>
                <TextInput style={styles.textInput} placeholder='Resultado' value={this.props.value} editable={false}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    display: {
        padding: 10,
    },
    textInput: {
        height:60,
        justifyContent:'center',
        fontSize: 18,
        color: '#000'
    }
});