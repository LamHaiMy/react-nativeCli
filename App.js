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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';
import ListItem from './source/Views/ListItem'
import HeaderCom from './source/Views/Header'

const { width } = Dimensions.get('window');

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const handlePess = () => console.log("Text press");
  const inputRef = React.createRef(null);

  return (
    <>
    {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body} >
      <TouchableOpacity onPress={() => {
        console.log('input: ', inputRef.current);
        inputRef.current.clickA();
      }}><Text>Click me</Text></TouchableOpacity>
        <HeaderCom></HeaderCom>
        <ListItem ref={inputRef}></ListItem>
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
