import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

function BookDetail(props) {

    var id = props.route.params;

    const [book, setBook] = useState({ title: "", author: "", price: "", stock_quantity: "" });
    const [qty, setQty] = useState(1);
    const[uId, setUId] = useState(0);

    useEffect(() => {
        AsyncStorage.getItem("user_id").then((data) => {
            console.log(data);
            setUId(data);
          });
        getBook();

    }, []);


    function getBook() {
        axios.get(`http://localhost:4444/book/${id}`)
            .then((result) => {
                setBook(result.data.data);
            })
    }

    function IncrementFun(){
        setQty(qty + 1);
    }

    function DecrementFun(){
        if(qty > 0) {
            setQty( qty - 1 );
        }
        
    }

    function Order(book_id){

        debugger;
        axios.post(`http://localhost:4444/purchase/order`,{userId: uId ,bookId: book_id ,quantity: qty})
             .then((result)=>{
                if(result.data.status == 'success'){
                    book.stock_quantity = book.stock_quantity - qty;
                 Alert.alert('Book Purchase Successfully...')

                }
             })

    }

    return (<>
        <Text> Book Details Page </Text>
        <Card>
            <View>
                <Text>Title: {book.title}</Text>
                <Text>Author: {book.author}</Text>
                <Text>Price: {book.price}</Text>
                <Text>In Stock: {book.stock_quantity}</Text>
                <Text>Quantity: </Text>
                <Button onPress={IncrementFun}>+</Button>
                <Text>{qty}</Text>
                <Button onPress={DecrementFun}>-</Button>
            </View>
            <Button onPress={() => {Order(book.book_id)}}>Order</Button>
        </Card>

    </>);
}

export default BookDetail;