import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get('window');
const THRESHOLD = 100;
export default class Home extends React.Component {
    state = {
      paused: true,
    };

  render = () => {
    const {paused} = this.state;
    return (
      <View style={styles.container}>
        <Text>Component A</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
