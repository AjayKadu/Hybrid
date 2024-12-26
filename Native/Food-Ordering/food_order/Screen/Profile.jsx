import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Platform, TouchableOpacity,Text, Image } from 'react-native';
import {  TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

export default function Profile() {
  const [gender, setGender] = useState('');

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
          
          <Image style={styles.imgView} source={{uri: `https://www.pngplay.com/wp-content/uploads/6/Avengers-A-Letter-Logo-Dispersion-PNG.png`}} ></Image>

        <View style={styles.inputBox}>
          <TextInput label={'Name'} mode="outlined" style={styles.textInput} />
          <TextInput label={'Mobile'} mode="outlined" style={styles.textInput} />
          <TextInput label={'Email'} mode="outlined" style={styles.textInput} />
          <TextInput label={'Date of birth'} mode="outlined" style={styles.textInput} />
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => alert('Profile Updated')}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '90%',
  },
  textInput: {
    marginBottom: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginTop: 8,
    height: 50, 
    justifyContent: 'center',
  },

  picker: {
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 0 : 8,
    color: '#2F363F',
    height: 50,
    borderRadius: 5,
    fontSize: 15
  },

  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
    width: '20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  imgView: {
    height: 90,
    width: 90,
    borderRadius: '50%',
    marginVertical: 10,
  }

});
