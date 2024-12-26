import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";

function Orders() {

    const [books_orders, setBooks_orders] = useState([]);
    const [uId, setUId] = useState(0);

    useEffect(() => {
        debugger;
        AsyncStorage.getItem("user_id").then((data) => {
            console.log(data);
            setUId(data);
        });
        allOrders();
    }, [uId]);

    function allOrders() {
        debugger;
        axios.get(`http://localhost:4444/purchase/orders/${uId}`)
            .then((result) => {
                if(result.data.status == 'success') {
                    setBooks_orders(result.data.data);
                }
            })

    }

    return (<>

        <Text>Your Orders</Text>

        {
            books_orders.map((item) => {
                return (<>
                    <Card>
                        <View>
                            <Text>Order Id: {item.purchase_id} </Text>
                            <Text>Book Title: {item.book_title} </Text>
                            <Text>Quantity: {item.quantity} </Text>
                            <Text>Total Price: {item.total_price * item.quantity} </Text>
                            <Text>Date: {item.purchase_date} </Text>
                        </View>
                    </Card>
                </>)
            })
        }

    </>);
}

export default Orders;