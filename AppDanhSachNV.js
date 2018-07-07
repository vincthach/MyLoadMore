import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View,
  Platform,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import HeaderUI from "./Header";
const MAX_STAFF_REQUEST_SIZE = 10;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentPage: -1,
      arrayList: []
    };
  }
  _loadingView() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  _loadData = async () => {
    const page = this.state.currentPage + 1;
    await fetch(
      `https://randomuser.me/api/?page=${page}&results=${MAX_STAFF_REQUEST_SIZE}`
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        const { arrayList } = this.state;
        let newArrayList = arrayList.concat(results);
        this.setState(
          {
            arrayList: newArrayList,
            isLoading: false,
            currentPage: page
          },
          () => console.log("loaded page ", page)
        );
      });
  };

  componentWillMount() {
    this._loadData();
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => <Text>{item.email}</Text>;
  _loadMore = () => {
    console.log("_loadMore");
    const { isLoading } = this.state;
    if (isLoading) {
      return;
    }
    this._loadData();
  };
  _renderFlatList = () => {
    return (
      <FlatList
        data={this.state.arrayList}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this._loadMore}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderUI />
        {this.state.isLoading ? this._loadingView() : this._renderFlatList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5FCFF"
  },
  listitem: {
    height: 100,
    backgroundColor: "#006fcc"
  }
});
