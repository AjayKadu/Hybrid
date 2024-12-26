import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, TextInput } from 'react-native-paper';

export default function Register(props) {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfPassword, setShowConfPassword] = useState(true);

  const LoginHere = () => {
    props.navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.CardView}>
      <View style={styles.content}>
        {/* Heading */}
        <Text style={styles.heading}>Register</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput label="Enter Your Name" mode="outlined" style={styles.input} />
          <TextInput label="Enter Your Email" mode="outlined" style={styles.input} />
          <TextInput label="Enter Your Phone" mode="outlined" style={styles.input} />
          <TextInput
            label="Enter Your Password"
            mode="outlined"
            secureTextEntry={showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye" : "eye-off"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            style={styles.input}
          />
          <TextInput
            label="Confirm Password"
            mode="outlined"
            secureTextEntry={showConfPassword}
            right={
              <TextInput.Icon
                icon={showConfPassword ? "eye" : "eye-off"}
                onPress={() => setShowConfPassword(!showConfPassword)}
              />
            }
            style={styles.input}
          />
        </View>

        {/* Register Button */}
        <Button mode="contained" icon="account-plus" onPress={() => console.log("Register pressed")} style={styles.button}>
          Register
        </Button>

        {/* Login Redirect */}
        <TouchableOpacity onPress={LoginHere}>
          <Text style={styles.loginText}>Already Registered? Go to Login</Text>
        </TouchableOpacity>
      </View>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
        alignItems: 'center'
  },
  CardView:{
    width:"90%",
    height: '500',
    justifyContent: 'center',
    paddingVertical: 10
},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 8,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
  loginText: {
    fontSize: 14,
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 15,
  },
});
