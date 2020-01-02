import  React, {Component} from 'react';
import {Picker, StyleSheet} from 'react-native';


export default props =>(
    <Picker style={styles.operation} selectedValue={props.operation} onValueChange={option=>{props.atualizaOpcao(option)}}>
        <Picker.Item label='Soma +' value='+'/>
        <Picker.Item label='Subtração -' value='-'/>
    </Picker>
)

const styles = StyleSheet.create({
    operation: {
        marginVertical: 15,
    },
});