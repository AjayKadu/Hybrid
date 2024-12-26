import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function StorageDemo() {
  const [emp, setEmp] = useState({ name: "", Address: "" });

  const onTextChange = (args) => {
    setEmp({ ...emp, name: args });
  };

  const StoreData = () => {
    AsyncStorage.setItem("name", emp.name).then(() => {
      console.log("Data Added");
    });
  };

  const GetStorage = () => {
    AsyncStorage.getItem("name").then((data) => {
      console.log(data);
      setEmp({ ...emp, name: data });
    });
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>Enter Your Name</Text>
      <TextInput
        style={style.textInput}
        placeholder="Your Name"
        value={emp.name}
        onChangeText={onTextChange}
      />
      <View style={style.buttonContainer}>
        <Button title="Store Data" onPress={StoreData} color="#6200EE" />
        <Button title="Get Storage" onPress={GetStorage} color="#03DAC5" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  textInput: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});

export default StorageDemo;