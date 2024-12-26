import { useState } from "react";
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { Button, Card, IconButton, Text, Snackbar } from "react-native-paper";

function Menu(props) {
    const Profile = () => {
        props.navigation.navigate("profile");
    };

    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [menuItems, setMenuItems] = useState([
        {
            ItemNo: 1,
            ItemName: "Paneer Pizza",
            Price: 200,
            ImageUrl: "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg",
            SearchKeywords: "pizza,veg,italian,indian,food"
        },
        {
            ItemNo: 2,
            ItemName: "BeetRoot Soup",
            Price: 300,
            ImageUrl: "https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg",
            SearchKeywords: "pizza,veg,italian,indian,food"
        },
        {
            ItemNo: 3,
            ItemName: "Burger",
            Price: 600,
            ImageUrl: "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
            SearchKeywords: "pizza,veg,italian,indian,food"
        },
        {
            ItemNo: 4,
            ItemName: "Fish Soup",
            Price: 600,
            ImageUrl: "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
            SearchKeywords: "pizza,veg,italian,indian,food"
        },
        {
            ItemNo: 5,
            ItemName: "Chinese",
            Price: 300,
            ImageUrl: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
            SearchKeywords: "pizza,veg,italian,indian,food"
        }
    ]);

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const ChekOut = () => {
        console.log("before passing : ", cart);
        props.navigation.navigate("bill", { cart, totalAmount });
    };

    const AddtoCart = (item) => {
        setCart([...cart, item]);
        setTotalAmount(totalAmount + item.Price);
        setSnackbarMessage(`${cart.length + 1} item added to cart successfully`);
        setSnackbarVisible(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarVisible(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-end" }}>
                            <Pressable onPress={Profile}>
                                <Image style={styles.pp} source={{ uri: "https://i.pinimg.com/236x/4a/cd/01/4acd0124f5c5b29fd25e69cf41c16fe3.jpg" }} />
                            </Pressable>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>Food Menus</Text>
                    <View style={{ flex: 1 }}>
                        {menuItems.map((menuItem) => {
                            return (
                                <TouchableOpacity key={menuItem.ItemNo}>
                                    <Card style={styles.card}>
                                        <Card.Content>
                                            <View style={{ flexDirection: "row", margin: 5, padding: 2 }}>
                                                <Image style={styles.image} source={{ uri: menuItem.ImageUrl }} />
                                                <View style={styles.textSpace}>
                                                    <Image style={styles.veg} source={{ uri: "https://packagingguruji.com/wp-content/uploads/2022/09/Veg-Logo-2.png" }} />
                                                    <Text> Name : {menuItem.ItemName}</Text>
                                                    <Text> Price : {menuItem.Price} ₹</Text>
                                                    <Button
                                                        mode="contained"
                                                        onPress={() => { AddtoCart(menuItem); }}
                                                    >
                                                        Add to Cart
                                                    </Button>
                                                </View>
                                            </View>
                                        </Card.Content>
                                    </Card>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <Button style={styles.checkout} onPress={ChekOut} >
                        <IconButton iconColor='#f1f5f9' icon={"cart"}></IconButton>
                        <Text style={{ color: 'white' }}> Check Out</Text>
                    </Button>
                </View>
            </ScrollView>

            {/* Updated Snackbar */}
            <Snackbar
                visible={snackbarVisible}
                duration={2000}
                onDismiss={handleSnackbarClose}
            >
                {snackbarMessage}
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110
    },
    textSpace: {
        flexDirection: "column",
        marginLeft: 30
    },
    card: {
        margin: 2
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    veg: {
        width: 25,
        height: 25
    },
    checkout: {
        marginTop: 10,
        backgroundColor: '#F3B431'
    },
    pp: {
        marginTop: 10,
        borderWidth: 1,
        width: 60,
        height: 60,
        justifyContent: 'flex-end'
    }
});

export default Menu;
