import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function ThankYou(props) {

    const GoToMenu = () =>{
        props.navigation.navigate("Menu")
    }

  return (
    <View>
      <Text>Thank You for Ordering!...</Text>
      <Button onPress={GoToMenu} icon={'home'}>Order Again</Button>
    </View>
  )
}

const styles = StyleSheet.create({})