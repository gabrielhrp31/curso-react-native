import  React from 'react';
import {Button} from 'react-native';


export default props => (
    <Button title='Calcular' onPress={props.action} /*style={styles.button}*/ />
);

// const styles = StyleSheet.create({
//     button: {
//         color:'black'
//     }
// });