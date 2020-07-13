import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import SubItem from './SubItem';

const { width, height } = Dimensions.get('window');
const THRESHOLD = 100;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.subItemRef = React.createRef();
  }

  clickA() {
    this.subItemRef.current.changeColorView();
  }

  render = () => {
    return (
      <View style={styles.container}>
        <Text>Component B</Text>
        <SubItem ref={this.subItemRef}></SubItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
