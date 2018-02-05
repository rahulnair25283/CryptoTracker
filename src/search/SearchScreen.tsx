import React, { Component } from "react";
import Search from "./component/Search";
import { View, StyleSheet } from "react-native";
import StatusBar from "../statusBar/StatusBar";

export interface State {}
export interface Props {
    navigation: any;
}

export default class SearchScreen extends Component<Props, State> {
    public render() {
        return (
            <View>
                <StatusBar style={styles.statusBarBackground} />
                <Search navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        backgroundColor: "#30bced",
    },
});
