import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Button, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 


export default function Pay(props) {
  const CheckOut = () => {
    props.navigation.navigate('thankyou');
  };
  const { totalAmount } = props.route.params;

  const [checked, setChecked] = React.useState('card'); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>

      <RadioButton.Group
        onValueChange={(newValue) => setChecked(newValue)}
        value={checked}
      >
        <View style={styles.option}>
          <RadioButton value="card" />
         {/* <Image
            source={{
              uri: 'https://toppng.com/uploads/preview/credit-card-11530978339malxaqcd71.png',
            }}
            style={styles.image}
          /> */}
          <View style={styles.container}>
        <Icon name="credit-card" size={30} color="blue" />
       </View>
          <Text>Pay with Card</Text>
        </View>

        <View style={styles.option}>
          <RadioButton value="cash" />
          <View style={styles.container}>
      <Icon name="money" size={30} color="green" />
    </View>
          <Text>Pay with Cash</Text>
        </View>

        <View style={styles.option}>
          <RadioButton value="paypal" />
          <Text>Pay with GPay</Text>
        </View>
      </RadioButton.Group>

      <Text
        style={{
          fontSize: 24,
          fontFamily: 'monospace',
          fontWeight: 'semibold',
          textAlign: 'center',
        }}
      >
        Total Billing Amount: {totalAmount}
      </Text>

      <Button mode="contained" onPress={CheckOut} style={styles.button}>
        See Receipt
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 250,
    marginRight: 10,
  },
});