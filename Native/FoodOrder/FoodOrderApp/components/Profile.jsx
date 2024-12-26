import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Card, Text, TextInput } from 'react-native-paper';

export default function Profile(props) {
  const Update = () => {
    props.navigation.navigate('menu');
  };

  return ( <ScrollView>
  <SafeAreaView> 
  
         <View style={styles.view}>
          <Card style={styles.card}>
            <Card.Title />
            <Card.Content>
            <View style={styles.container}>
           <Text style={{textAlign:'center'}}>Profile</Text>
            <Image
                    source={{uri: 'https://i.pinimg.com/236x/4a/cd/01/4acd0124f5c5b29fd25e69cf41c16fe3.jpg'}}  
                    style={styles.photo}
                  />

              <TextInput label={"Enter your Name"} mode='outlined' /> 
              <TextInput label={"Enter your Email"} mode='outlined' /> 
              <TextInput label={"Enter your Mobile"} mode='outlined' />   
              <TextInput label={"Enter your Password"} mode='outlined' />      





    
      <Button onPress={Update} style={styles.button}>Update</Button>


      <View style={styles.footer}>
        <Text>Made by Ritik ❤️</Text>
      </View>
    </View>
    </Card.Content>
          </Card>
          </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  footer: {
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  photo:{
    marginTop:10,
    borderWidth:1,
    width:300,
    height:250,
    
//     borderRadius:'50%',
 },
  card:{
    flex:1,  
    height:400,
    width:'90%',
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#F5F5F5',
    
  },
  view:{
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#F5F5F5',
  }
});