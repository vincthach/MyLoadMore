import React from "react";
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import ItemStyle from "./ItemStyle";
import Icon from "react-native-vector-icons/FontAwesome";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }

  /**
   * @items: array sublist of menu item
   */
  _renderSubList = () => {
    const { textStyle, items } = this.props;
    return items.map((menu, index) => (
      <Text
        key={index}
        style={[textStyle, { marginLeft: 50, paddingVertical: 10 }]}
      >
        {menu}
      </Text>
    ));
  }

  _onMenuItemClick = () => {
    this.setState({ isExpand: !this.state.isExpand });
  };

  render() {
    const { iconSource, imageStyle, textStyle, content } = this.props;
    //    dropDownImgSource={menu.items ? "chevron-right" : ""}
    return (
      <TouchableHighlight
        style={{ paddingTop: 40, paddingBottom: 20 }}
        onPress={this._onMenuItemClick}
      >
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name={iconSource} style={imageStyle} size={20} />
            <Text style={textStyle}>{content}</Text>
            <Text style={{ flex: 1, textAlign: "right", marginRight: 30 }}>
              <Icon
                name={this.state.isExpand ? "chevron-down" : "chevron-right"}
                size={20}
              />
            </Text>
          </View>
          {this.props.items &&
            this.state.isExpand && (
              <ScrollView style={{ flexDirection: "row", paddingTop: 20 }}>
                {this._renderSubList()}
              </ScrollView>
            )}
        </View>
      </TouchableHighlight>
    );
  }
}

ListItem.propTypes = {
  iconSource: PropTypes.string.isRequired,
  imageStyle: PropTypes.any,
  textStyle: PropTypes.any,
  content: PropTypes.string.isRequired,
  items: PropTypes.array
};

ListItem.defaultProps = {
  imageStyle: ItemStyle.imageStyle,
  textStyle: ItemStyle.textStyle
};

export default ListItem;
