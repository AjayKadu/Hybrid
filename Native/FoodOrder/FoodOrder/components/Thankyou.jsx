import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper';

export default function Thankyou(props) {
  const Menus = () => {
    props.navigation.navigate('menu');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://img.clipart-library.com/2/clip-check-mark-gif/clip-check-mark-gif-17.gif'}}  
        style={styles.image}
      />
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.message}>Your order has been successfully placed.</Text>
      <Button mode="contained" onPress={Menus} style={styles.button}>
        Order Again!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});