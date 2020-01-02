import  React from 'react';
import { View, Text} from 'react-native';
import Display from './Display'

const Result = props => (
    <View>
        <Display value={props.result}/>
    </View>
);

export { Result }