import axios from "axios";
import { useState } from "react";
import { Button, TextInput,Text } from "react-native-paper";

function Registration() {

    const [user, setUser] = useState({uname: "", email: "", password: "", mobile: ""});
    const [message, setMessage] = useState("");

    const SignUp = () =>{

        axios.post('http://192.168.1.21:4444/user/register', user)
             .then((result) =>{
              var message = result.data
              debugger;
              setMessage(message);
             })
    }


    return (<>
    

    <TextInput label={'username'} onChangeText={(value) => { setUser({...user, uname: value})}} mode="outlined"/>
    <TextInput label={'email'} onChangeText={(value) => { setUser({...user, email: value}) }} mode="outlined"/>
    <TextInput label={'password'} onChangeText={(value) => { setUser({...user, password: value}) }} mode="outlined"/>
    <TextInput label={'mobile'} onChangeText={(value) => { setUser({...user, mobile: value}) }} mode="outlined"/>
    <Button onPress={SignUp} >Sign Up</Button>

     <Text>{message}</Text>
    
    </>  );
}

export default Registration;