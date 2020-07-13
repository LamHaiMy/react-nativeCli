import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
class ListItems extends React.Component {

  _renderItemImg(item) {
    return <View style={styles.cardItem}>
              <Image style={styles.imgCustom} source={{uri: item.imageUrl}}/>
              <View style={styles.cardContent}>
                <Text style={styles.titleImg}>{item.productName}</Text>

              </View>
            </View>
  }
  render = () => {
    return (
      <View style={styles.container}>
        <Text>{this.props.textTest}</Text>
        <FlatList
          ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
          renderItem={({item}) => this._renderItemImg(item)}
          data={this.props.listData}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  titleImg: {
    fontSize: 20
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 1,
  },
  imgCustom: {
    width: 100,
    height: 100
  },
  cardContent: {
    backgroundColor: 'yellow',
    width: width - 130
  }
})

function mapStateToProps(state) {
  return {
    textTest: state.testText,
    listData: state.listItem,
  };
}
export default connect(mapStateToProps)(ListItems);