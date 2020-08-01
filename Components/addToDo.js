import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function AddToDo({ AddInput }) {
    const [input, setInput] = useState('');

    const changeHandler = (value) => {
        setInput(value);
    };
    return (
        <View>
            <TextInput
                //borderBottomWidth='1'
                // borderBottomColor='blue'
                style={styles.input}
                placeholder='Add New todo'
                onChangeText={changeHandler}
                value={input}
            />
            <Button color='coral' title='Add New todo' onPress={() => AddInput(input)} />
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        //backgroundColor: 'yellow',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        borderWidth: 1,
    }
}
)