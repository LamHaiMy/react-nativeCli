import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get('window');
export default class Home extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      paused: false
    };
  }

  render = () => {
    const {paused} = this.state;
    return (
      <View style={styles.container}>
        <Text>Hello My</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
})
