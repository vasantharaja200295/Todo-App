import {React, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './assets/components/task';


export default function App() {
  const [task, setTask] = useState()
  const [task_items, setTaskItems] = useState([])

  const handleAddtask = () =>{
    Keyboard.dismiss()
    setTaskItems([...task_items, task])
    setTask(null)
  }

  const taskCompletion = (index) =>{
    let itemsCopy = [...task_items];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }
  return (
    <View style={styles.container}>
      <View style={styles.content_wrapper}>
        <Text style={styles.header_text}>Todo List</Text>
      </View>
      {/* Tasks */}
      <ScrollView style={styles.tasks_container}>
        {/* Task items */}
        {
          task_items.map((item, index)=>{
            return <TouchableOpacity onPress={()=>taskCompletion(index)}>
              <Task key={index} text={item}/>
            </TouchableOpacity> 
            
          })
        }
      </ScrollView>
      <KeyboardAvoidingView style={styles.add_input_wrapper}
      behavior={Platform.OS==='ios'?'padding':'height'}>
        <TextInput style={styles.input} placeholder={"Write a task.."} value={task} onChangeText={text=> setTask(text)}/>
        <TouchableOpacity style={styles.add_text_wrapper} onPress={()=>{handleAddtask()}}>
          <Text style={styles.add_text}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4E4',
  },
  header_text:{
    fontSize:32,
    fontWeight:'bold',
  },
  content_wrapper:{
    paddingTop:50,
    paddingHorizontal:15,
  },
  tasks_container:{
    marginTop:20,
    paddingHorizontal:15,
    marginBottom:60,
  },
  add_input_wrapper:{
    position:"absolute",
    bottom:0,
    width:"100%",
    height:60,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  input:{
    fontSize:16,
    paddingHorizontal:15,
    width:300,
    marginLeft:15,
    textAlign:'center',
    height:45,
    backgroundColor:"#fff",
    borderRadius:10,
    borderColor:"#30B5DF",
    borderWidth:2,
},
  add_text_wrapper:{
    marginLeft:20,
    height:50,
    width:50,
    borderRadius:40,
    backgroundColor:"#fff",
    alignItems:'center'

},
  add_text:{
    fontSize:36,
    textAlign:"center",
    color:'#767676'
},
});
