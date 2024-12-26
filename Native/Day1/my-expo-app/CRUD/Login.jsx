import { SafeAreaView, StyleSheet, View,Button  } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Text, } from 'react-native-paper'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props) {

const [credentials, setCredentials] = useState({userName : "", password : ""});
const [showPassword, setShowPassword] = useState(true);

const Login = () =>{

    axios.post(`http://192.168.106.241:9090/login`, credentials)
         .then( async(result) =>{

            if(result.data.token != null || result.data.token != undefined){
                await AsyncStorage.setItem("token",result.data.token);
                await AsyncStorage.setItem("userName", credentials.userName);
                props.navigation.navigate("Home");
            }
            else{
                //To-Do
            }
          
           

         })
}


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headingText}>Login</Text>
                <TextInput style={styles.textInput} label={"Enter your username"} mode='outlined' onChangeText={(value) =>{setCredentials({...credentials, userName : value})}} />
                <TextInput style={styles.textInput} label={"Enter your password"} mode='outlined' secureTextEntry={showPassword} right={<TextInput.Icon icon={showPassword ? "eye" : "eye-off"} onPress={()=> setShowPassword(!showPassword)} />} onChangeText={(value) =>{setCredentials({...credentials, password: value})}} />
                <View style={styles.btn}>
                <Button title={"Login"} onPress={Login}></Button>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        margin: 10,
        backgroundColor: '#f5f5f5',
        flex : 1
    },

    content : {
        alignItems: "center"
    },

    headingText:{
        fontSize:25,
        fontWeight: "bold",
        margin : 5
     
    },

    btn : {
       margin: 5,
       fontSize : 10,
    },

    textInput : {
        width : "70%",
        margin : 3
    }
})