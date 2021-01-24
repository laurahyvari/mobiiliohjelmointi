import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Alert} from 'react-native';

export default function App() {
  const buttonPressed= () => {Alert.alert('Button pressed');}

  return (

   
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button onPress={buttonPressed} title="Press me"/>
      </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
