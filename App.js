import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Main from './components/main.component/mainComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hola</Text>
      <StatusBar style="auto" />
      <Image source={{uri:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'}} style={{width:200, height: 200}} />
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
  text:{
    alignItems: 'center',
    justifyContent: 'center' ,
    color: '#FFFF'
  }


});

