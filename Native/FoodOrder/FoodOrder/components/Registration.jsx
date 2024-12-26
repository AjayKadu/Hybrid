import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text, TextInput } from 'react-native-paper'

export default function Registration(props) {
    const Register = () => {
        props.navigation.navigate("login");
    }
    const [showpassword, setShowPassword] = useState(true);
    
  return (
    <ScrollView>
    
    <View style={styles.container}>
        <Card >
        <Card.Content>
      <Text style={styles.Text}>Registration</Text>

      <TextInput label={"Enter Your Name"}  style={styles.content} mode='outlined'/> 

      <TextInput label={"Enter Your Email"} style={styles.content} mode='outlined' inputMode='email' keyboardType='email-address'/> 

      
      <TextInput label={"Enter Your Phone Number"} style={styles.content} mode='outlined'  inputMode='tel' keyboardType='phone-pad'/> 


      <TextInput label={"Enter Your Password"} style={styles.content} mode='outlined'
       right={<TextInput.Icon icon={"eye"}
        onPress={()=>{setShowPassword(!showpassword)}}/>}  secureTextEntry={showpassword}/> 


      <Button   style={styles.Button} icon={"logout"}>Submit</Button>

      <TouchableOpacity >
        <Text onPress={Register} > Already Registered? Click here to login  </Text>
      </TouchableOpacity>
      </Card.Content>
      </Card>
      

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    Text: {
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
    content: {
        width: 300,
        marginBottom: 10,
    },
    Button: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: 10,
        marginTop: 20,
    }


})