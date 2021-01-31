import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Main from './components/main.component/mainComponent'
import {Card} from 'react-native-elements'

export default function App() {
  return (
    <View style={styles.container}>
      <Main  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop:50,

  },



});

