
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, Button,View } from 'react-native';

export default function AddToDo({submitHandler}){
    const [text,setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }

    return(
        <View>
            <TextInput
                placeholder="Add a new todo here :)"
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button onPress={()=>submitHandler(text)} title="Add todo" color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"gray"
    }

})