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
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation';

const { width } = Dimensions.get('window');
export default class Home extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      paused: false,
      overlay: false,
      muted: false,
      fullscreen: false,
      currentTime: 0,
      duration: 0.1,
    };
  }

  lastTap = null;
  // if i click single tap it will show overlay otherwise it work like youtube
  handleDoubleTab = (doubleTabCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if(this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      clearTimeout(this.timer);
      doubleTabCallback();
    } else {
      this.lastTap = now;
      this.timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  }

  fullscreen = () => {
    const { fullscreen } = this.state;
    if(fullscreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    this.setState({ fullscreen: ! fullscreen})
  }

  getTime = t => {
    const digit = n => n < 10 ? `0${n}` : `${n}`;
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t/60) % 60));
    const hr = digit(Math.floor((t/3600) % 60));
    return hr + ':' + min + ':' + sec;
  }

  load = ({ duration }) => this.setState({duration}) // the duration is update on load video

  progress = ({ currentTime }) => this.setState({ currentTime }) // the current time is updated

  backward = () => {
    this.video.seek(this.state.currentTime - 5);
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  forward = () => {
    this.video.seek(this.state.currentTime + 5);
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  onslide = slide => {
    this.video.seek(slide * this.state.duration);
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  youtubeSeekLeft = () => {
    const { currentTime } = this.state;
    this.handleDoubleTab(() => {
      this.video.seek(currentTime - 5);
    }, () => {
      this.setState({overlay: true});
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false}), 3000);
    })
  }
  youtubeSeekRight = () => {
    const { currentTime } = this.state;
    this.handleDoubleTab(() => {
      this.video.seek(currentTime + 5);
    }, () => {
      this.setState({overlay: true});
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false}), 3000);
    })
  }

  render = () => {
    const {paused, overlay, muted, fullscreen, currentTime, duration} = this.state;
    return (
      <View style={styles.container}>
        <View style={fullscreen ? styles.fullscreenVideo : styles.video}>
          <Video
            ref={ref => this.video = ref}
            source={{uri: "https://vjs.zencdn.net/v/oceans.mp4"}}   // Can be a URL or a local file.
            style={styles.backgroundVideo}
            resizeMode='cover'
            paused={paused}
            muted={muted}
            fullscreen={fullscreen}
            onLoad={this.load}
            onProgress={this.progress}
          />
          <View style={styles.overlay}>
            {
              overlay ? <View style={{...styles.overlaySet, backgroundColor: '#0006'}}>
                <Icon name='backward' style={styles.icon} onPress={this.backward}></Icon>
                <Icon name={paused ? 'play' : 'pause'} style={styles.icon} onPress={() => this.setState({paused: !paused})}></Icon>
                <Icon name='forward' style={styles.icon} onPress={this.forward}></Icon>
                <Icon name={muted ? 'volume-off' : 'volume-up'} size={30} style={styles.iconMute} color="#fff" onPress={() => this.setState({muted: !muted})}></Icon>
                <View  style={styles.sliderCont}>
                  <View style={styles.timer}>
                    <Text style={{color: 'white'}}>{this.getTime(currentTime)}</Text>
                    <Text style={{color: 'white'}}>{this.getTime(duration)}  <Icon onPress={this.fullscreen} name={fullscreen ? 'compress' : 'expand'} style={{fontSize: 15}}></Icon>
                    </Text>
                  </View>
                  <Slider
                    maximumTrackTintColor='white'
                    minimumTrackTintColor='white'
                    thumbTintColor='white'
                    value={currentTime / duration}
                    onValueChange={this.onslide}
                  ></Slider>
                </View>
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
  },
  iconMute: {
    paddingTop: 10,
    paddingRight: 10,
    position: 'absolute'
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  video: {
    width,
    height: width * .6,
    backgroundColor: 'black'
  },
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1
  }
})
