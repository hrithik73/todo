import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}> To Do</Text>
        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        // flex: 1,
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
        // alignItems: 'center',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }

})
