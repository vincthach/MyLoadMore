import React, { Component } from "../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import {
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View,
  Platform,
  StyleSheet
} from "react-native";
import Icon from "../../../Library/Caches/typescript/2.9/node_modules/@types/react-native-vector-icons/Entypo";
import Items from "./Components/Items";

export default class App extends Component {
  _renderList = () => {
    const listitems = ["home", "heart", "book", "shopping-cart", "comments", "cloud", "youtube-play", "android", "apple"];
    const listContent = ["Home", "Heart", "Book", "Cart", "Comment", "Cloud", "Youtube", "Android", "Apple"];
    const array = [];

    array.push(
      <Items
        key={1}
        iconSource="home"
        dropDownImgSource="chevron-down"
        content="Home"
      />
    );
    array.push(
      <Items
        key={2}
        iconSource="heart"
        dropDownImgSource="chevron-down"
        content="Heart"
      />
    );
    array.push(
      <Items
        key={3}
        iconSource="book"
        dropDownImgSource="chevron-down"
        content="Book"
      />
    );
    array.push(
      <Items
        key={4}
        iconSource="shopping-cart"
        dropDownImgSource="chevron-down"
        content="Cart"
      />
    );
    array.push(
      <Items
        key={5}
        iconSource="comments"
        dropDownImgSource="chevron-down"
        content="Comments"
      />
    );
    array.push(
      <Items
        key={6}
        iconSource="cloud"
        dropDownImgSource="chevron-down"
        content="Cloud"
      />
    );
    array.push(
      <Items
        key={7}
        iconSource="youtube-play"
        dropDownImgSource="chevron-down"
        content="Youtube"
      />
    );
    array.push(
      <Items
        key={8}
        iconSource="android"
        dropDownImgSource="chevron-down"
        content="Android"
      />
    );
    array.push(
      <Items
        key={9}
        iconSource="apple"
        dropDownImgSource="chevron-down"
        content="Apple"
      />
    );
    return array;
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "#00CED1",
            flexDirection: "row"
          }}
        >
          <Icon
            name="menu"
            size={30}
            style={{ paddingTop: 5, paddingLeft: 10 }}
          />
          <Text style={{ fontSize: 30, marginLeft: 10 }}>Topic</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Icon
              name="dots-three-vertical"
              size={30}
              style={{ flex: 1, paddingTop: 5, alignItems: "flex-end" }}
            />
          </View>
        </View>
        <ScrollView>{this._renderList()}</ScrollView>
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
