import React, { Component } from "react";
import Search from "./component/Search";
import { View, StyleSheet, Dimensions } from "react-native";
import StatusBar from "../statusBar/StatusBar";

const { height } = Dimensions.get("window");

export interface State { }
export interface Props {
    navigation: any;
}

export default class SearchScreen extends Component<Props, State> {
    public render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusBarBackground} />
                <Search navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9f9f9",
        height: height,
    },
    statusBarBackground: {
        backgroundColor: "#ffffff",
    },
});
