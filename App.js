import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text,Alert, View, TouchableWithoutFeedback,Keyboard, Button, TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todo';
import AddToDo from './components/addTodo';

export default function App() {
  const [todos,setTodo] = useState([
    {text:"First todo",key:"1"},
    {text:"Second todo",key:"2"},
    {text:"Third todo",key:"3"}
  ])

  const pressHandler = (key) => {
    setTodo((prevTodo)=>{
      return prevTodo.filter(todo=> todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3) {

      setTodo((prevTodo)=>{
        return [
          {text:text, key: Math.random().toString()},
          ...prevTodo
        ]
    })
    }
    else{
      Alert.alert("OOPS!","Todos must be over 3 chars long",
      [{text:"Understood"}])
    }
  }


  return (
    <TouchableWithoutFeedback onPress={()=> 
    Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=> (
             <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex:1,
    backgroundColor:"gainsboro"
  },
  content:{
    padding:45
  },
  list:{
    marginTop:20,
    height:500
  }

});
