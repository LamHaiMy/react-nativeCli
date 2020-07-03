import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  ImageBackground
} from "react-native";
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

export default class  FlatlistHorizontalScroll extends React.Component {

  categoryVideo = [
    {
      categoryTitle: 'My list',
      listVideo: [
        {
          id:1,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
        },
        {
          id: 2,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
        },
        {
          id: 3,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
        },
        {
          id: 4,
          imageUri: 'https://www.gstatic.com/webp/gallery/1.jpg'
        },
        {
          id: 5,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        },
        {
          id: 6,
          imageUri: 'https://www.gstatic.com/webp/gallery/5.jpg'
        },
        {
          id: 7,
          imageUri: 'https://www.gstatic.com/webp/gallery/4.jpg'
        }
      ]
    },
    {
      categoryTitle: 'Trending Now',
      listVideo: [
        {
          id:1,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
        },
        {
          id: 2,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
        },
      ]
    },
    {
      categoryTitle: 'Imaginative Western TV Show',
      listVideo: [
        {
          id:1,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
        },
        {
          id: 2,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
        },
        {
          id: 3,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
        },
        {
          id: 4,
          imageUri: 'https://www.gstatic.com/webp/gallery/1.jpg'
        },
        {
          id: 5,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        },
        {
          id: 6,
          imageUri: 'https://www.gstatic.com/webp/gallery/5.jpg'
        },
        {
          id: 7,
          imageUri: 'https://www.gstatic.com/webp/gallery/4.jpg'
        }
      ]
    },
    {
      categoryTitle: 'Romantic Asian TV Dramas',
      listVideo: [
        {
          id:1,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
        },
        {
          id: 2,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
        },
        {
          id: 3,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
        },
        {
          id: 4,
          imageUri: 'https://www.gstatic.com/webp/gallery/1.jpg'
        },
        {
          id: 5,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        },
        {
          id: 6,
          imageUri: 'https://www.gstatic.com/webp/gallery/5.jpg'
        },
        {
          id: 7,
          imageUri: 'https://www.gstatic.com/webp/gallery/4.jpg'
        }
      ]
    },
    {
      categoryTitle: 'Originals',
      listVideo: [
        {
          id:1,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
        },
        {
          id: 2,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
        },
        {
          id: 3,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
        },
        {
          id: 4,
          imageUri: 'https://www.gstatic.com/webp/gallery/1.jpg'
        },
        {
          id: 5,
          imageUri: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        },
        {
          id: 6,
          imageUri: 'https://www.gstatic.com/webp/gallery/5.jpg'
        },
        {
          id: 7,
          imageUri: 'https://www.gstatic.com/webp/gallery/4.jpg'
        }
      ]
    }
  ]
  _renderItemImg(item) {
    return <View>
              <Image style={styles.imgCustom} source={{uri: item.imageUri}}/>
              <Text style={styles.titleImg}>N</Text>
            </View>
  }
  render = () => {
    // const {} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={{uri: 'https://www.gstatic.com/webp/gallery/1.jpg'}} style={styles.imgPoster}>
            <View style={styles.overlay}>
              <View style={styles.buttonHead}>
                <Text style={styles.textWhite}>Genres</Text>
              </View>
              <View style={styles.wrapperNameVideo}>
                <Text style={[styles.nameVideo, styles.textWhite]}>Video's Name</Text>
              </View>
              <View style={styles.action}>
                <View><Text style={styles.textWhite}>My list</Text></View>
                <View><Text style={styles.textWhite}>Play</Text></View>
                <View><Text style={styles.textWhite}>Info</Text></View>
              </View>
            </View>
          </ImageBackground>
          {
            this.categoryVideo.map((categogy, index) => <View key={index}>

              <Text style={styles.label}>{categogy.categoryTitle}</Text>
              <FlatList
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
                renderItem={({item}) => this._renderItemImg(item)}
                keyExtractor={item => item.id}
                data={categogy.listVideo}
              >
              </FlatList>

            </View>)
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgPoster: {
    width,
    height: 500
  },
  imgCustom: {
    width: 120,
    height: 180
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 5
  },
  titleImg: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    top: 0,
    left: 5,
    color: 'red'
  },
  overlay: {
    height: 500
  },
  wrapperNameVideo: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameVideo: {
    fontWeight: "bold",
    fontSize: 30,
    top: 300,
    color: 'yellow'
  },
  action: {
    height: 100,
    top: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textWhite: {
    color: 'white',
    fontWeight: 'bold'
  },
  buttonHead: {
    flexDirection: 'row-reverse'
  }
})
