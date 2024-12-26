import { StyleSheet,TouchableOpacity,View} from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput,Text, Card, IconButton } from 'react-native-paper'

export default function Login(props) {
const SignIn=()=>{
    props.navigation.navigate("menu");
}
const RegisterHere=()=>{
    props.navigation.navigate("register");
    }
const [secureText,setSeureText]=useState(true);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
      <Card.Content>
        
      <Text style={styles.title}>Login</Text>
      <TextInput label={"Enter Your Email"} mode={"outlined"} 
      />

      <TextInput label={"Enter Your Password"} mode={"outlined"} secureTextEntry={secureText}
       right={<TextInput.Icon icon={"eye"} onPress={()=>{setSeureText(!secureText)}}/>}
      />  
      
     

      <Button onPress={SignIn} style={styles.button} buttonColor='#f1f5f9'> 
        <IconButton iconColor='#f1f5f9' icon={"login"}></IconButton> 
        <Text style={styles.Button}> Sign in    </Text>
      </Button> 
        

     
      <TouchableOpacity >
        <Text  style={styles.RButton} onPress={RegisterHere} >Register here...</Text>
        </TouchableOpacity>
        </Card.Content>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        },
   Button: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20
            },

    button: {
                backgroundColor:'black'
                },

    RButton: {
                    color:"#7B8788"

               },
    card:{
       width: "70%",
       height: 310
    }

})