/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListItems from './source/Views/ListItems'
const { width } = Dimensions.get('window');
import store from './source/Redux/store';

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const handlePess = () => console.log("Text press");
  const inputRef = React.createRef(null);

  return (
    <>
    {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body} >
        <Provider store={store}>
          <ListItems></ListItems>
        </Provider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
