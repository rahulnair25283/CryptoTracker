import React, { Component } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles";
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
    return <View>{this.renderHeader()}</View>;
  }

  private renderHeader = () => (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={this.props.navigateBack}>
          <Icon name="arrow-back" color="#ffffff" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBoxContainer}>
        <TextInput
          placeholder={"Search for a coin..."}
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.searchBox}
          onChangeText={searchText => this.setState({ searchText })}
          value={this.state.searchText}
        />
        <TouchableOpacity
          style={styles.cancelSearchButton}
          onPress={() =>
            this.setState({
              searchText: "",
            })
          }
        >
          <Icon name="close" color="#050401" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
