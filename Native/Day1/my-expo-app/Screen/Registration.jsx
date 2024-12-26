import {SafeAreaView, StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput} from 'react-native-paper'

export default function Registration() {

    const [showPassword, setShowPassword] = useState(true)

  return (
  <SafeAreaView style={styles.container}>
      <View>
      <TextInput label={"Enter Your Username"} mode='outlined' />
      <TextInput label={"Enter Your Password"} mode='outlined' 
      secureTextEntry={showPassword} 
      right={<TextInput.Icon 
      icon={showPassword ? "eye" : "eye-off"}  
      onPress={() =>setShowPassword(!showPassword)} />} />
    
    <Button icon={"login"}>Registration</Button>

    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16, // Adds padding inside the container
        backgroundColor: '#f5f5f5', // Optional background color for better appearance
      },
})