import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default props => (
    <TextInput style={styles.number} value={props.num} onChangeText={value=>{props.atualizaValor(value,props.id)}}/>
);

const styles = StyleSheet.create({
    number: {
        width: 140,
        height: 80,
        fontSize: 20,
    },
});