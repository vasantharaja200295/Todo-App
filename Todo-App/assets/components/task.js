import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageLeft}>
                <View style={styles.ring}></View>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:"#FFF",
        borderRadius:10,
        marginBottom:10,
    },
    ring:{
        width:20,
        height:20,
        borderRadius:50,
        borderColor:"#30B5DF",
        borderWidth:5,
        marginRight:15,
    },
    imageLeft:{
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:'center',
    },
    text:{
        fontSize:16,
        maxWidth:"90%",
    },

})

export default Task;