import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

function Login(props) {

    const [user, setUser] = useState({email : "", password: ""});
    const [message, setMessage] = useState('');

const Register = () => {
    props.navigation.navigate('Registration');
}


    const Login = () =>{
        debugger;
        axios.post(`http://localhost:4444/user/login`, user)
             .then((result) => {
                if(result.data.status == 'success'){
                   console.log('Login')
                   AsyncStorage.setItem("user_id", result.data.data.user_id)
                   props.navigation.navigate('Home');
                }
                else if(result.data.status == 'error'){
                    setMessage(result.data.error);
                }
             })

             .catch((error)=>{
                console.log('Something Went Wrong...')
                setMessage(error.data.error);
             })

    }


    return (<>
         <Text>Login</Text>  

         <View>
            <TextInput label={'Enter Your Email'} onChangeText={(value) => { setUser({...user, email: value})}} />
            <TextInput label={'Enter Your Password'}  onChangeText={(value) => { setUser({...user, password: value})}} />
         </View>

        <Button onPress={Login} icon={'login'}>Login</Button>

        <Text>{message}</Text>

        <Text onPress={Register}>To Register Click Here...</Text>
        </>);

    
}

export default Login;