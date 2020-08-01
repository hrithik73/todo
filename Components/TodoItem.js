import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoList({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.itemText}>
                <MaterialIcons name={'delete'} size={18} color='red' />
                <Text style={styles.item}> {item.text}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    item: {
        //flex: 1,
        //backgroundColor: 'red',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    itemText: {
        marginLeft: 10,
    }
})