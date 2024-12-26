import { StyleSheet, Text, View } from "react-native";

function Demo() {
  return ( <View style={style.container}>

   <Text style={style.content}>Hello React Native!</Text>

  </View> );
}



const style =StyleSheet.create({

  container:{
   backgroundColor: "black",
   justifyContent : "center",
   alignItems: "center"
  },

  content:{
    color: "white"
    
  }

})

export default Demo;