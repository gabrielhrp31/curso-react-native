import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.scene} >
        <Text>
            Contatos
        </Text>
    </View>
);

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});