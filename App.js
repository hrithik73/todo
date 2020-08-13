import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Components/header';
import TodoList from './Components/TodoItem';
import AddToDo from './Components/addToDo';

export default function App() {

  const [toDo, setToDo] = useState([
    { text: 'Buy A Earphone', key: '2' },
    { text: 'Learn React-Native', key: '3' },
    { text: 'Solve 250 Spoj Problem', key: '4' },
    { text: 'Build a Minimal App', key: '5' },
  ]);


  const AddInput = (input) => {
    if (input.length > 3) {
      setToDo(prevTodo => {
        return [
          { text: input, key: Math.random().toString() },
          ...prevTodo
          // Spread Operator
        ]
      }
      )
    }
    //If The Input is Smaller than 3 char 
    else {
      //alert has 3 parameter Header=OPPS,Msg=Todos,Array[]=text for button,after pressing Button
      Alert.alert('OOPS!', 'Todos Must be 3 Char Long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
  }

  const pressHandler = (key) => {
    setToDo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);

    });

  }
  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Dismiss KeyBoard')
    }}>
      <View style={styles.container}>
        {/* the First View it wrap around the whole Screen */}
        <Header />
        <View style={styles.content}>
          {/* This one for the  */}
          <AddToDo AddInput={AddInput} />

          <View style={styles.list}>
            <FlatList
              data={toDo}
              renderItem={({ item }) =>
                <TodoList item={item} pressHandler={pressHandler} />
              }
            />
          </View>

        </View>


      </View>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 40
  },
  content: {
    flex: 1,
    padding: 40,
    // backgroundColor: 'yellow'
  },
  list: {
    flex: 1,
    //  backgroundColor: 'blue',
    marginTop: 20,
  },
});
