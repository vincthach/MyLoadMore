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

const HeaderUI = props => (
  <View
    style={{
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: "#00CED1",
      flexDirection: "row"
    }}
  >
    <Icon name="menu" size={30} style={{ paddingTop: 5, paddingLeft: 10 }} />
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

export default HeaderUI;
