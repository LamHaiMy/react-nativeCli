import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');
const THRESHOLD = 100;
export default class Home extends React.Component {
    state = {
      paused: true,
    };

    position = {
      start: null,
      end: null
    };

    handleScroll = (e) => {
      const scrollPosition = e.nativeEvent.contentOffset.y;
      const paused = this.state.paused;
      const { start, end } = this.position;
      console.log('scrollPosition: ', scrollPosition);


      if(scrollPosition > start && scrollPosition < end) {
        this.setState({ paused: false });
      } else if ((scrollPosition > start || scrollPosition < end) && !paused) {
        this.setState({ paused: true })
      }
    }

    handleVideoLayout = (e) => {
      console.log('height: ', height); // màng hình
      console.log('e.nativeEvent.layout.y: ', e.nativeEvent.layout.y);// e.nativeEvent.layout.y = 0
      console.log('e.nativeEvent.layout.height: ', e.nativeEvent.layout.height);// height video

      this.position.start = e.nativeEvent.layout.y + height + THRESHOLD - e.nativeEvent.layout.height;
      this.position.end = this.position.start + e.nativeEvent.layout.height + THRESHOLD;
      console.log();

      console.log('this.position: ', this.position);

    }

  render = () => {
    const {paused} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView scrollEventThrottle={16} onScroll={this.handleScroll}>
          <View style={styles.fakeContent}><Text>{paused ? 'stop' : 'playing'}</Text></View>
            <Video
              repeat
              source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}}   // Can be a URL or a local file.
              style={{width, height: 300}}
              resizeMode='cover'
              paused={paused}
              onLayout={this.handleVideoLayout}
            />
          <View style={styles.fakeContent}><Text>{paused ? 'stop' : 'playing'}</Text></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fakeContent: {
    height: 850,
    backgroundColor: "#ccc",
    paddingTop: 250,
    alignItems: "center",
  },
  backgroundVideo: {
    width,
    height: 300
  }
})
