import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import Video from 'react-native-video';

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
        <View style={{width, height: width * .6, backgroundColor: 'black'}}>
          <Video
            source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}}   // Can be a URL or a local file.
            style={styles.backgroundVideo}
          />
        </View>
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
  },
  backgroundVideo: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%"
  }
})
