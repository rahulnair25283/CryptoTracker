import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  navigateBack: () => void;
}
interface State {
  searchText: string;
}

export default class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  public render() {
    return <View style={styles.container}>{this.renderHeader()}</View>;
  }

  private renderHeader = () => (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={this.props.navigateBack}>
          <Icon name="keyboard-arrow-left" color="#ffffff" size={20} />
        </TouchableOpacity>
      </View>
      {/* <View>
        <TextInput
          style={{ backgroundColor: "white", borderColor: "white"}}
          onChangeText={searchText => this.setState({ searchText })}
          value={this.state.searchText}
        />
      </View> */}
    </View>
  )
}
