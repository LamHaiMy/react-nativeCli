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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const handlePess = () => console.log("Text press");

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body} >
        <View style={styles.container}>
          <View style={[styles.sessionFlex1, styles.displayFlexEnd]}>
            <View style={[styles.subSesson, styles.subSesson1]}>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </View>
            <View style={[styles.subSesson, styles.subSesson2]}></View>
            <View style={[styles.subSesson, styles.subSesson3]}></View>
          </View>
          <View style={[styles.sessionFlex1, styles.displayRowSpace]}>
            <View style={[styles.subSesson, styles.subSesson1]}>
              <Text>My</Text>
              <Text>My Lâm</Text>
              <Text>Lâm Hải My</Text>
            </View>
            <View style={[styles.subSesson, styles.subSesson2]}></View>
            <View style={[styles.subSesson, styles.subSesson3]}></View>
          </View>
          <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.sesson2}>
            <View style={styles.containerCenter}>
              <Text style={styles.title}>This session can scroll</Text>
            </View>
            <View style={styles.displayRowBetween}>
              <View>
                <View style={[styles.subSesson, styles.subSesson1]}></View>
                <View style={[styles.subSesson, styles.subSesson2]}></View>
                <View style={[styles.subSesson, styles.subSesson3]}></View>
              </View>
              <View>
                <View style={[styles.subSesson, styles.subSesson1]}>
                  <Text>My</Text>
                  <Text>My Lâm</Text>
                  <Text>Lâm Hải My</Text>
                </View>
                <View style={[styles.subSesson, styles.subSesson2]}></View>
                <View style={[styles.subSesson, styles.subSesson3]}></View>
              </View>
              <View>
                <View style={[styles.subSesson, styles.subSesson1]}></View>
                <View style={[styles.subSesson, styles.subSesson2]}></View>
                <View style={[styles.subSesson, styles.subSesson3]}></View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.sesson3}>
            <Text onPress={handlePess} numberOfLines={1}>With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.</Text>
            <Text style={styles.title}>Can not scroll</Text>
            <View>
                <View style={[styles.subSesson, styles.subSesson1]}></View>
                <View style={[styles.subSesson, styles.subSesson2]}></View>
                <View style={[styles.subSesson, styles.subSesson3]}></View>
              </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "bisque",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    color: "brown",
    fontWeight: "bold",
    fontSize: 20
  },
  containerCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  sessionFlex1:{
    flex: 1,
    backgroundColor: "aliceblue"
  },
  sesson2:{
    flex: 1,
    backgroundColor: "antiquewhite"
  },
  sesson3:{
    flex: 1,
    backgroundColor: "beige"
  },
  subSesson: {
    width: 100,
    height: 100
  },
  displayRow: {
    flexDirection: "row"
  },
  displayFlexEnd: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  displayRowSpace: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  displayRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subSesson1: {
    backgroundColor: "tomato"
  },
  subSesson2: {
    backgroundColor: "cadetblue"
  },
  subSesson3: {
    backgroundColor: "darksalmon"
  }
});

export default App;
