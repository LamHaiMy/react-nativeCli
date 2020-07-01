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
  TextInput,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const handlePess = () => console.log("Text press");
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body} >
        <View style={styles.container}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {/* Address and search */}
            <View style={styles.session}>
              <View style={styles.rowComponent}>
                <View>
                  <Text>Address</Text>
                </View>
                <View>
                  <Text>Icon</Text>
                </View>
              </View>
              <View style={styles.searchBox}>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: "100%" }}
                onChangeText={text => onChangeText(text)}
                value={value}
              />
              </View>
            </View>
            {/* Slider show image */}
            <View style={styles.session}>
              <View style={styles.cardItem}>
                <ImageBackground source={require('./source/assets/Images/banner.jpg')} style={styles.styleImg}>
                  <Text style={styles.titleLabel}>Chào bạn mới</Text>
                  <Text style={styles.exampleCoupon}>* Áp dụng cho nhà hàng trong chương trình</Text>
                </ImageBackground>
                <View>
                  <Text>See more</Text>
                </View>
              </View>
            </View>
            {/* Category item */}
            <View style={styles.session}>
              <Video
                source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}}   // Can be a URL or a local file.
                style={styles.backgroundVideo}
                controls={true} // Show control
                repeat={false} //Determine whether to repeat the video when the end is reached
                poster="https://baconmockup.com/300/200/"
                posterResizeMode="cover"
              />
            </View>
            {/* Coupon free */}
            <View style={{ width, height: width * .6, backgroundColor: 'black'}}>
              <Video
              ></Video>
            </View>
            {/* List today favorite*/}
            <View style={styles.session}></View>
            {/* List item */}
            <View style={styles.session}></View>
            <View style={styles.session}>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
  },
  session: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  rowComponent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  searchBox: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  cardItem: {
    backgroundColor: "#f2f2f2",
    height: 150,
    borderRadius: 10
  },
  styleImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  backgroundVideo: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200
  }
});

export default App;
