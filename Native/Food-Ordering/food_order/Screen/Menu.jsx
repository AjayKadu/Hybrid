import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, TextInput } from 'react-native-paper'

export default function Menu(props) {

  const [foods, setFoods] = useState([
    {
      "itemNo": 1,
      "itemName": "Samosa",
      "itemPrice": 100,
      "itemImageUrl": "https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg",
      "searchKeywords": ["snack", "indian", "fried", "samosa"]
    },
    {
      "itemNo": 2,
      "itemName": "Burger",
      "itemPrice": 150,
      "itemImageUrl": "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
      "searchKeywords": ["fast food", "burger", "snack", "sandwich"]
    },
    {
      "itemNo": 3,
      "itemName": "Pizza",
      "itemPrice": 300,
      "itemImageUrl": "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      "searchKeywords": ["italian", "pizza", "cheese", "fast food"]
    },
    {
      "itemNo": 4,
      "itemName": "Pasta",
      "itemPrice": 250,
      "itemImageUrl": "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg",
      "searchKeywords": ["italian", "pasta", "noodles", "cheesy"]
    },
    {
      "itemNo": 5,
      "itemName": "Ice Cream",
      "itemPrice": 120,
      "itemImageUrl": "https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg",
      "searchKeywords": ["dessert", "ice cream", "cold", "sweet"]
    }
  ]
  );

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.00);

  const menuAdded = (item) => {
    setCart([...cart, item])
    setTotal(total + item.itemPrice)
  }

  const GoToBill = () => {
    props.navigation.navigate("Bill", { cart, total })
  }

  const GoToProfile = () => {
    props.navigation.navigate("Profile")
  }

  return (
    <ScrollView>
      <View style={styles.container}>


        <View style={styles.header}>

          <View>
            <View style={styles.header1}>
              <Image style={styles.img} source={{ uri: `https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNDY3YmF0Y2gyLWxvY2F0aW9uLTAwMS5wbmc.png` }}></Image>
              <Text>Hinjewadi</Text>
            </View>
            <Text style={{paddingLeft: 7, color:'#535C68'}}>Sunbeam, hinjewadi phase 2, Pune.... </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Pressable onPress={GoToProfile}>
            <Image style={styles.imgView} source={{ uri: `https://www.pngplay.com/wp-content/uploads/6/Avengers-A-Letter-Logo-Dispersion-PNG.png` }} ></Image>
            </Pressable>
          </TouchableOpacity>

        </View>



        {
          foods.map((item) => {

            return (
              <Card style={styles.cardView} key={item.itemNo}>
                <View style={styles.content}>
                  <Image style={styles.imageView}
                    source={{ uri: item.itemImageUrl }}
                  >
                  </Image>

                  <View style={styles.textView}>
                    <Image style={styles.typeImage} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png' }}></Image>
                    <Text style={styles.text}>{item.itemName}</Text>
                    <Text style={styles.text}>${item.itemPrice}</Text>
                  </View>

                  <View style={styles.cartBtnView}>
                    <TouchableOpacity>
                      <Button style={styles.cartBtn} mode='outlined'>+/-</Button>
                      <Button style={styles.cartBtn} mode='contained' onPress={() => { menuAdded(item) }}>Add to Cart</Button>
                    </TouchableOpacity>
                  </View>

                </View>
              </Card>

            )
          })
        }
        <Text>{total}</Text>
        <Button onPress={GoToBill} icon={'cart'} >CheckOut</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures location is on the left and profile is on the right
    alignItems: 'center', // Aligns items vertically in the center
    width: '95%', // Adjust width to keep it responsive
    padding: 10, // Adds some padding for better spacing
    backgroundColor: '#f5f5f5', // Optional background color
    borderRadius: 10, // Rounds corners
    marginBottom: 10, // Adds spacing below the header
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 8, // Adds spacing between location icon and text
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  cardView: {
    height: 110,
    width: '95%',
    padding: 5,
    justifyContent: 'center',
    marginBottom: 8,
  },
  content: {
    flexDirection: 'row',
  },
  imageView: {
    width: 100,
    height: 95,
    borderRadius: 7,
  },
  textMenu: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000000',
  },
  cartBtnView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cartBtn: {
    margin: 4,
  },
  textView: {
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    paddingVertical: 1,
  },
  typeImage: {
    height: 20,
    width: 20,
  },
  img: {
    height: 20,
    width: 20,
  },
  imgView: {
    height: 40, // Increased size for better visibility
    width: 40,
    borderRadius: '50%', // Makes the profile image circular
    backgroundColor: '#ccc', // Placeholder background
  },
});
