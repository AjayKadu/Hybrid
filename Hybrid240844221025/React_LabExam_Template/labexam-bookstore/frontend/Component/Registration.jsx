import axios from "axios";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

function Registration(props) {
    
    const[user, setUser] = useState({first_name: "", last_name: "",email: "", password: ""});
    const [message, setMessage] = useState('');

    const SignUp = () =>{
  
        axios.post(`http://localhost:4444/user/register`, user)
             .then((result) => {
                if(result.data.status == 'success'){
                   setMessage(result.data.data);
                }
             })

             .catch((error)=>{
                console.log('Something Went Wrong...')
                setMessage(error.data.error);
             })

    }


    return ( <>
    
    <Text>Registration</Text>

    <TextInput label={'Enter Your First Name'} onChangeText={(value) => { setUser({...user, first_name: value})}} />
    <TextInput label={'Enter Your Last Name'} onChangeText={(value) => { setUser({...user, last_name: value})}} />
    <TextInput label={'Enter Your Email'} onChangeText={(value) => { setUser({...user, email: value})}} />
    <TextInput label={'Enter Your Password'} onChangeText={(value) => { setUser({...user, password: value})}} />

        <Text>{message}</Text>

        <Button onPress={SignUp}>Register</Button>
    
    </> );
}

export default Registration;