import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name:"Sagar",key:'1'},
    {name:"Max",key:'2'},
    {name:"Lewis",key:'3'},
    {name:"Charles",key:'4'},
    {name:"Sebastian",key:'5'},
    {name:"George",key:'6'},
    {name:"Lando",key:'7'},
  ]);

  const pressHandler = (key) => {
    console.log(key);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.key != key);
    });
  } 

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.item} key={item.key}>{item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    paddingTop:70,
    paddingHorizontal:30,
    backgroundColor:"gray"
  },
  item:{
    padding:10,
    fontSize:20,
    margin:40,
    backgroundColor:"gainsboro",
    borderRadius:20
  }
});
