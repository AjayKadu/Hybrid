import { StyleSheet, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput, Text, Button, Card } from 'react-native-paper'
import React, { useState } from 'react'

export default function Login(props) {

    const [showPassword, setShowPassword] = useState(true);


    const Login = () => {
        props.navigation.navigate("Menu");
    }

    const Register = () => {
        props.navigation.navigate("Register")
    }



    return (
        <SafeAreaView style={styles.container}>
            <Card style={styles.CardView}>
           <ScrollView>
           <View style={styles.content}>
                
                <Text style={styles.textHeading}>Login</Text>
                <View style={styles.textInput}>
                    <TextInput style={styles.input} label={"Enter Your Name"} mode='outlined' />
                    <TextInput style={styles.input} label={"Enter Your Password"} mode='outlined'
                        secureTextEntry={showPassword}
                        right={<TextInput.Icon icon={showPassword ? 'eye' : 'eye-off'}
                            onPress={() => setShowPassword(!showPassword)} />} />
                </View>
                <View>
                    <Button icon={'login'} onPress={Login}>Login</Button>
                </View>
                <TouchableOpacity>
                    <Text style={styles.textRegister} onPress={Register}>Click here to Register...</Text>
                </TouchableOpacity>
          
        </View>
           </ScrollView>
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    CardView:{
        width:"90%",
        height: 500,
        justifyContent: 'center',
        paddingVertical: 10
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInput: {
        width: '90%',
        marginBottom: 10
    },

    input: {
        margin: 4
    },

    textHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10

    },

    textRegister: {
        fontSize: 16,
        fontWeight: 400,
        marginTop: 10,
        color: '#74B9FF'
    }
})