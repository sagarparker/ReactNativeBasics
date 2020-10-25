import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState("Sagar");
  const [age,setAge] = useState('30');
  const [output,setOutput] = useState(false);

  const clickHandler = () =>{
    setOutput(true);
  }

  return (
    <View style={styles.container}>
      <Text>Enter your name</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(val)=> setName(val)}/>
      <Text>Enter your age</Text>
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your age"
        onChangeText={(val)=> setAge(val)}/>
      <View style={styles.buttonContainer}>
        <Button title="Update name"  onPress={clickHandler} />
      </View>
      {output && <Text>
            Hello {name} {age}
      </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer:{
    marginTop:10
  },
  input:{
    borderWidth:1,
    borderColor:'gainsboro',
    width:150,
    marginTop:10,
    marginBottom:10,
    padding:10 
  }
});
