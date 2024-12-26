import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-native-paper'
import RazorpayCheckout from 'react-native-razorpay';


export default function Bill(props) {

  const { cart, total } = props.route.params;

  const [fees, setFees] = useState({ delevryFees: 30.14, platformFees: 10.00, Gst: 37.45 });
  const [totalWithFees, setTotalWithFees] = useState(total)

  useEffect(() => {
    const totalAll = total + fees.delevryFees + fees.platformFees + fees.Gst;
    setTotalWithFees(totalAll);
  }, []);

  const GoToPayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: '<YOUR_KEY_ID>', // Replace with your Razorpay API Key ID
      amount: totalWithFees * 100, // Amount in paisa
      name: 'Acme Corp',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar'
      },
      theme: { color: '#53a20e' }
    };
  
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  

  return (
    <ScrollView>
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.textBill}>Bill</Text>

      <Card style={styles.cardView}>
        <Card.Content>
          <View style={styles.mainView}>
            <Image style={styles.billImage} source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/bill-3d-icon-download-in-png-blend-fbx-gltf-file-formats--invoice-receipt-payment-finance-pack-icons-4089326.png' }}>
            </Image>

            <View style={styles.firstView}>
              <Text>To Pay ₹ {totalWithFees.toFixed(2)}</Text>
              <Text style={{ color: '#535C68' }}>Incl. all taxes & charges</Text>
            </View>
          </View>

          <View style={styles.solidLine} />

          <View style={styles.secondView}>
            <Text>Item Total</Text>
            <Text>₹{total.toFixed(2)}</Text>
          </View>

          <View style={styles.dashedLine} />

          <View>
            <View style={styles.secondView}>
              <Text>Delivery Fee | 1.3 kms</Text>
              <Text>₹{fees.delevryFees.toFixed(2)}</Text>
            </View>
            <Text style={styles.textExtra}>This fee is directly charged by restaurant</Text>
          </View>

          <View style={styles.dashedLine} />

          <View style={styles.secondView}>
            <Text>Platform fee</Text>
            <Text>₹{fees.platformFees.toFixed(2)}</Text>
          </View>

          <View style={styles.dashedLine} />

          <View style={styles.secondView}>
            <Text>GST and Restaurant charges</Text>
            <Text>₹{fees.Gst.toFixed(2)}</Text>
          </View>

          <View style={styles.solidLine} />

          <View style={styles.secondView}>
            <Text>To Pay</Text>
            <Text>₹{totalWithFees.toFixed(2)}</Text>
          </View>

        </Card.Content>
      </Card>

      <Button
        style={styles.btn}
        mode="contained"
        labelStyle={styles.btnLabel}
        onPress={GoToPayment}
      >
        Proceed to Payment
      </Button>
    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardView: {
    width: '90%'
  },

  textBill: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },

  billImage: {
    height: 50,
    width: 50
  },

  mainView: {
    flexDirection: 'row'
  },

  firstView: {
    marginLeft: 14
  },

  secondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4
  },

  textExtra: {
    padding: 4,
    color: '#535C68'
  },

  btn: {
    backgroundColor: '#007BFF',
    marginTop: 20,
    paddingVertical: 4,
    borderRadius: 15,
    width: '80%',
    alignSelf: 'center'
  },

  btnLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  solidLine: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 8,
  },

  dashedLine: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 8,
  }
})
