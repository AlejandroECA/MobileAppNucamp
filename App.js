import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Main from './components/main.component/mainComponent';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore'

import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/loading/Loading.Component';

const { persistor, store } = ConfigureStore();



export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate
            loading={<Loading />}
            persistor={persistor}>
            <Main />
        </PersistGate>
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

