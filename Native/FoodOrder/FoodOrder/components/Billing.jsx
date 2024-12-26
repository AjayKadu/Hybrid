import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, Text } from 'react-native-paper';

export default function Billing(props) {
  const { cart: initialCart, totalAmount: initialTotalAmount } = props.route.params;

  const [cart, setCart] = useState(initialCart);
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);
  const [deliveryFee] = useState(50); 
  const [platformFee] = useState(20); 
  const [gstRate] = useState(0.18);

  
  const removeItem = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.ItemNo !== itemToRemove.ItemNo);
    setCart(updatedCart);
    setTotalAmount(totalAmount - itemToRemove.Price);
  };

 
  const gstAmount = totalAmount * gstRate;
  const finalAmount = totalAmount + deliveryFee + platformFee + gstAmount;

  const Bill = () => {
    props.navigation.navigate('pay', { totalAmount: finalAmount });
  };

  return (
    <ScrollView>
      <Card>
        <Card.Content>
          <View style={{ width: "100%" }}>
            <Text>Your Bill</Text>
            <View style={{ margin: "auto", width: "80%" }}>
              {cart.map((item) => (
                <Card style={{ margin: 10 }} key={item.ItemNo}>
                  <Card.Content>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Image style={styles.imageBill} source={{ uri: item.ImageUrl }} />
                      <Text>{item.ItemName} - {item.Price} ₹</Text>
                      <Button
                        mode="contained"
                        style={{ backgroundColor: '#FF6F61', marginTop: 10 }}
                        onPress={() => removeItem(item)}
                      >
                        Remove
                      </Button>
                    </View>
                  </Card.Content>
                </Card>
              ))}
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Card style={styles.billcard}>
                <Card.Content>
                  <Text style={styles.textStyle}>Item Total: ₹{totalAmount}</Text>
                  <Text style={styles.textStyle}>Delivery Fee: ₹{deliveryFee}</Text>
                  <Text style={styles.textStyle}>Platform Fee: ₹{platformFee}</Text>
                  <Text style={styles.textStyle}>GST (18%): ₹{gstAmount.toFixed(2)}</Text>
                  <Text style={styles.textStyle}>Total Amount to Pay: ₹{finalAmount.toFixed(2)}</Text>
                  <Button
                    style={{ backgroundColor: '#45CE30', marginTop: 10 }}
                    onPress={Bill}
                  ><Text style={{ color: 'white' }}>
                    Proceed To Pay </Text>
                  </Button>
                </Card.Content>
              </Card>
            </View>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBill: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  billcard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 280,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: "monospace",
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 5,
  },
  procceedtopay:{
    
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff',
    textAlign: 'center',
  }
});