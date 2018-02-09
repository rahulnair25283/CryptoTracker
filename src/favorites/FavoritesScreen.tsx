import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import FavoritesList from "./component/FavoritesList";

const { height } = Dimensions.get("window");

export interface State { }
export interface Props {
    navigation: any;
}

export default class MainScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusBarBackground} />
                <FavoritesList navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        height: height,
    },
    statusBarBackground: {
        backgroundColor: "#30bced",
    },
});
