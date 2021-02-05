import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Main from './components/main.component/mainComponent'
import {Card} from 'react-native-elements'

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore'

const store =  ConfigureStore()

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Main  />
      </Provider>
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

