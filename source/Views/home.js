import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
export default class Home extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      paused: false,
      overlay: false,
    };
  }

  render = () => {
    const {paused, overlay} = this.state;
    return (
      <View style={styles.container}>
        <View style={{width, height: width * .6, backgroundColor: 'black'}}>
          <Video
            ref={ref => this.video = ref}
            source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}}   // Can be a URL or a local file.
            style={styles.backgroundVideo}
            resizeMode='cover'
            onLoad={this.load}
            onProgress={this.progress}
          />
          <View style={styles.overlay}>
            {
              !overlay ? <View style={{...styles.overlaySet, backgroundColor: '#0006'}}>
                <Icon name='backward' style={styles.icon} onPress={this.backward}></Icon>
                <Icon name={paused ? 'play' : 'pause'} style={styles.icon} ></Icon>
                <Icon name='forward' style={styles.icon} onPress={this.forward}></Icon>
              </View> : <View style={styles.overlaySet}>
                <TouchableNativeFeedback onPress={this.youtubeSeekLeft}><View style={{ flex: 1 }}></View></TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.youtubeSeekRight}><View style={{ flex: 1 }}></View></TouchableNativeFeedback>
              </View>
            }
          </View>
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
    width: "100%",
    height: "100%"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25
  }
})
