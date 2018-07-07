import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View,
  Platform,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import ListItem from "./Components/ListItem";
import MenuData from "./MenuData";

export default class App extends Component {
  _renderMenuList() {
    return MenuData.map((menu, index) => {
      return (
        <ListItem
          key={index}
          iconSource={menu.icon}
          items={menu.items}
          content={menu.title}
          onPress={() => {
            console.log("on call");
          }}
        />
      );
    });
  }

  _renderHeader() {
    return (
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
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        <ScrollView>{this._renderMenuList()}</ScrollView>
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
