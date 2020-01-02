import  React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default props => (
    <View style={styles.top}>
        <Text style={styles.text}>Calculadora 1.0</Text>
    </View>
);

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#FFF'
    }
});