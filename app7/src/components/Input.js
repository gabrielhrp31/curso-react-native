import  React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Number from './Number'

export default props => (
    <View style={styles.view}>
       <Number num={props.num1} atualizaValor={props.atualizaValor} id={1}/>
       <Number num={props.num2} atualizaValor={props.atualizaValor} id={2}/>
    </View>
);

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});