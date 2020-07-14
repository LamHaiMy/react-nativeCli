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
      colorView: 'yellow'
    }
  }

  changeColorView() {
    this.setState({
      colorView: 'red'
    })
  }

  render = () => {
    const {colorView} = this.state;
    return (
      <View style={styles.container}>
        <Text>Component Sub B</Text>
        <ScrollView>
        <View style={[styles.viewBackground, {backgroundColor: colorView}]}>
          <Text>Backgrount</Text>
          <Text>Example
To use, wrap your top level view with a SafeAreaView with a flex: 1 style applied to it. You may also want to use a background color that matches your application's design.</Text>
          <Text>Props
Inherits View Props.

As padding is used to implement the behavior of the component, padding rules in styles applied to a SafeAreaView will be ignored and can cause different results depending on the platform. See #22211 for details.

emulateUnlessSupported</Text>
<Text>Props
Inherits View Props.

As padding is used to implement the behavior of the component, padding rules in styles applied to a SafeAreaView will be ignored and can cause different results depending on the platform. See #22211 for details.

emulateUnlessSupported</Text>
<Text>Props
Inherits View Props.

As padding is used to implement the behavior of the component, padding rules in styles applied to a SafeAreaView will be ignored and can cause different results depending on the platform. See #22211 for details.

emulateUnlessSupported</Text>
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
    width: 300,
    height: 800,

  }
})
