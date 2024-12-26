import axios from "axios";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

function Login(props) {

    const[user, setUser] = useState({email : "", password: ""});

const Login = () =>{
   
    axios.post('http://192.168.1.21:4444/user/login', user)
    .then((result) =>{
     if(result.data.status == 'success')
        props.navigation.navigate("Home");
    
    })

}


const Registration = () =>{
    props.navigation.navigate("Registration");
}
    return ( <View>
    

    <TextInput label={'Enter your Email'} onChangeText={(val) => {setUser({...user, email: val})}} mode="outlined"/>
    <TextInput label={'Enter your password'} onChangeText={(val) => {setUser({...user, password: val})}} mode="outlined"/>
    <Button icon={'login'} onPress={Login}>Login</Button>
    <Text onPress={Registration}>Register Here...</Text>
    </View> );
}

export default Login;