import { useEffect, useState } from "react";
import { Card, Text, Button, TextInput } from "react-native-paper";
import { Alert, View } from "react-native";
import axios from "axios";

function Home(props) {
  
    const[books, setBooks] = useState([]);
    const [b_id, setB_id] = useState('');
    const [search, setSearch] = useState('');

    useEffect(()=>{
         Books();
    },[]);

    function Books() {
        axios.get(`http://localhost:4444/book/all`)
             .then((result)=>{
                if(result.data.status == 'success'){
                    setBooks(result.data.data);
                }
                else if (result.data.status == 'error'){
                    Alert.alert('Something Went Wrong...');
                }
               
             })
    }

    const Details = (id) =>{
         props.navigation.navigate('BookDetails',id);
    }

    const Orders = () => {
        props.navigation.navigate('Orders');
    }

    const Searching = () =>{
         
        axios.get(`http://localhost:4444/book/title/?title=${search}`)
             .then((result) => {
                if(result.data.status == 'success'){
                    setBooks(result.data.data);
                }
                else if (result.data.status == 'error'){
                    Alert.alert('Something Went Wrong...');
                }
             })

    }

    return ( <>
    <Text>Home Page</Text>
     <Text onPress={Orders}>MyOrders</Text>

     <TextInput placeholder="Search Book by Title" onChangeText={(val) => {setSearch(val)}}/>
     <Button onPress={Searching}>Search</Button>

    {
        books.map((item) =>{
            return(<> 
                <Card key={item.book_id} onPress={()=> {Details(item.book_id)}}>
                   <View>
                    <Text>Title: {item.title}</Text>
                    <Text>Author: {item.author}</Text>
                   </View>
                </Card>   
            </>)
        })
    }
    
    </>  );
}

export default Home;