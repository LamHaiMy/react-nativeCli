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
  constructor(props) {
    super(props);
    this.state={
      colorViewNative: 'yellow',
      colorView: 'yellow'
    }
  }

  changeColorView() {
    this.setState({
      colorViewNative: 'red'
    })
  }

  render = () => {
    const {colorView, colorViewNative} = this.state;
    return (
      <View style={styles.container}>
        <Text>Component Sub B</Text>
        <ScrollView>
          <View style={styles.sessionChangeColor}>
            <View style={[styles.viewBackground, {backgroundColor: colorViewNative}]}>
              <Text>Backgrount change by native</Text>
            </View>
            <View style={[styles.viewBackground, {backgroundColor: colorView}]}>
              <Text>Backgrount change by redux</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBackground: {
    width: 100,
    height: 300,
  },
  sessionChangeColor: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
