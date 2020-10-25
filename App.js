import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name:"Sagar",key:'1'},
    {name:"Max",key:'2'},
    {name:"Lewis",key:'3'},
    {name:"Charles",key:'4'},
    {name:"Sebastian",key:'5'},
    {name:"George",key:'6'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((item)=> <Text style={styles.item} key={item.key}>{item.name} </Text> )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    paddingTop:100,
    paddingHorizontal:30
  },
  item:{
    padding:10,
    fontSize:20,
    margin:40,
    backgroundColor:"gainsboro",
    borderRadius:20
  }
});
