import React from 'react'
import { Text,View,StyleSheet } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.one}>One</Text>
            <Text style={styles.two}>Two</Text>
            <Text style={styles.three}>Three</Text>
            <Text style={styles.four}>Four</Text>
            <Text style={styles.five}>Five</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        backgroundColor:"gray",
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center"
    },
    one:{
        backgroundColor:'cyan',
        padding:20
    },
    two:{
        backgroundColor:'blue',
        padding:20
    },
    three:{
        backgroundColor:'green',
        padding:20
    },
    four:{
        backgroundColor:'yellow',
        padding:20
    },

    five:{
        backgroundColor:'pink',
        padding:20
    },

})