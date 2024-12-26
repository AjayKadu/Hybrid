import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


                              
function Example() {
    
    const [tasks, setTask] = useState([{id : 1, desc: "Study React-Native"},
        {id : 2, desc: "Study Apptitude"},
        {id : 3, desc: "Revision"}]);

 const Remove = (id) =>{
        var filteredTask = tasks.filter((tsk)=>{ return tsk.id !== id;});
        setTask(filteredTask);
 }

    return ( <View style={styles.container}>
               
             {   
                  tasks.map((item) =>{
               
                    return (<View style={styles.container2} key={item.id}>
                                 <Text style={styles.content}>{item.id}{".  "}{item.desc}</Text>
                                 <Button title="Remove" onPress={() => {Remove(item.id)}}></Button>
                            </View>)

                  })
             }
                  



            </View> );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "black",
        height:500,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
    },
    content:{
        color: "white",
        marginBottom : 8
        
      },

      container2: {
        height: 100,
        justifyContent: "left",
     
    },

});

export default Example;