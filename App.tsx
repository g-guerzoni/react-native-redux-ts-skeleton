import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import Routes from './src/';
import Store from './src/store';

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Routes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
