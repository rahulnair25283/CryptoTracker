import React, { Component } from "react";
import Search from "./component/Search";
import { View, Dimensions } from "react-native";
import AppStatusBar from "../statusBar/StatusBar";
import { ScaledSheet } from "react-native-size-matters";

const { height } = Dimensions.get("window");

export interface State { }
export interface Props {
    navigation: any;
}

export default class SearchScreen extends Component<Props, State> {
    public render() {
        return (
            <View style={styles.container}>
                <AppStatusBar />
                <Search navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = ScaledSheet.create({
    container: {
        backgroundColor: "#f9f9f9",
        height: height,
    },
    statusBarBackground: {
        backgroundColor: "#30bced",
    },
});
