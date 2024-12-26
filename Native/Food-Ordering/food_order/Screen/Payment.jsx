import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Payment(props) {

const Pay = () => {
    props.navigation.navigate("ThankYou")
}

  return (
    <View>
      <Text>Payment</Text>
      <Button onPress={Pay}>Pay</Button>
    </View>
  )
}

const styles = StyleSheet.create({})