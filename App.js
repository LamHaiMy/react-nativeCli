/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

const App: () => React$Node = () => {
  return (
    <>
    {/* <StatusBar translucent backgroundColor="transparent" /> */}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body} >

        <ScrollView>
          <ImageBackground source={require('./source/assets/Images/background.png')} resizeMode='cover'  style={styles.backgroundImage} >
            {/* header */}
            <View style={styles.header}>
              <View style={styles.row}>
                <Icon name='bars' style={styles.icon}></Icon>
              </View>
              <View style={styles.row}>
                <Text style={styles.headerText}>Đăng xuất</Text>
              </View>

            </View>
            <View>
              <View style={[styles.backgroundContent, styles.marginTop80]}>
                {/* avatar */}
                <View style={[styles.rowCenter, styles.marginTop20]}>
                  <Image
                    style={styles.tinyLogo}
                    source={{uri: 'https://www.gstatic.com/webp/gallery/1.jpg'}}
                  />
                </View>
                <View style={styles.rowCenter}>
                  <Text style={styles.textTitle}>Đại lý ABC</Text>
                </View>
                {/* icon */}
                <View style={styles.iconAction}>
                  <View style={styles.borderImg}>
                    <View style={styles.bageAction}><Text style={styles.colorWhite}>1</Text></View>
                    <Image
                      style={styles.iconActionLogo}
                      source={require('./source/assets/Images/img5.png')}
                    />
                  </View>
                  <View style={styles.borderImg}>
                    <Image
                      style={styles.iconActionLogo}
                      source={require('./source/assets/Images/img6.png')}
                    />
                  </View>
                  <View style={styles.borderImg}>
                    <Image
                      style={styles.iconActionLogo}
                      source={require('./source/assets/Images/img7.png')}
                    />
                  </View>
                </View>
                {/* content */}
                <View style={[styles.content, styles.rowCenter]}>
                  <Text numberOfLines={2}>Nội dung ........................................................................................................................</Text>
                </View>
                {/* image final */}
                <View style={styles.imageAction}>
                  <View style={styles.rowCenter}>
                    <View style={styles.itemImg}>
                      <Image
                        style={styles.imgActionLogo}
                        source={require('./source/assets/Images/img1.png')}
                      />
                      <Text>Sản phẩm</Text>
                    </View>
                    <View style={styles.itemImg}>
                      <Image
                        style={styles.imgActionLogo}
                        source={require('./source/assets/Images/img2.png')}
                      />
                      <Text>Sản phẩm</Text>
                    </View>
                  </View>
                  <View style={[styles.rowCenter, {marginTop: -15}]}>
                    <View style={styles.itemImg}>
                      <Image
                        style={styles.imgActionLogo}
                        source={require('./source/assets/Images/img3.png')}
                      />
                      <Text>Sản phẩm</Text>
                    </View>
                    <View style={styles.itemImg}>
                      <Image
                        style={styles.imgActionLogo}
                        source={require('./source/assets/Images/img4.png')}
                      />
                      <Text>Sản phẩm</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    width,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    letterSpacing: 1,
    paddingLeft: 20,
    color: 'white'
  },
  icon: {
    fontSize: 25,
    color: 'white'
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
  },
  backgroundImage: {
    width,
    flex: 1,
  },
  tinyLogo: {
    width: 130,
    height: 130,
    borderRadius: 100,
    position: 'absolute',
    top: -80
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop80: {
    marginTop: 80,
  },
  textTitle: {
    fontSize: 18,
    paddingTop: 60,
    paddingBottom: 10,
  },
  backgroundContent: {
    backgroundColor: 'white',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 20,
    borderRadius: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  iconAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20
  },
  iconActionLogo: {
    width: 55,
    height: 55,
  },
  borderImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 85,
    borderRadius: 100,
    borderColor: '#5da458',
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: -19
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white'
  },
  content: {
    marginTop: 80,
    marginLeft: 80,
    marginRight: 80
  },
  imgActionLogo: {
    width: 110,
    height: 110,
  },
  itemImg: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAction: {
    marginTop: 50,
  },
  bageAction: {
    width: 13,
    height: 13,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 10,
  },
  colorWhite: {
    color: 'white'
  },
});

export default App;
