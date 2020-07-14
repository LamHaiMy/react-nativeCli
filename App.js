/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
  TouchableHighlight,
  Modal,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListItems from './source/Views/ListItems'
const { width, height } = Dimensions.get('window');
import store from './source/Redux/store';
import Icon from 'react-native-vector-icons/FontAwesome';

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const handlePess = () => console.log("Text press");
  const inputRef = React.createRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body} >
        <Modal
          animationType="fade" //('none', 'slide', 'fade')
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View style={{width: '500%', position: 'absolute',height: height, padding: 100, marginTop: 500, marginLeft: -250, backgroundColor: 'red', transform: [{rotateZ: Math.PI / 8}]}}></View>
        <View style={styles.header}>
          <Icon name='bars' style={styles.icon} onPress={() => {
          setModalVisible(true);
        }}></Icon>
          <View>
            <Text style={styles.headerText}>Title</Text>
          </View>
        </View>
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
  header: {
    width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff5e57'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    fontSize: 20,
    left: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    opacity: 0.8,
    width,
    height,
    padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
