import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import FavoritesList from "./component/FavoritesList";

export interface State {}
export interface Props {
    navigation: any;
}

export default class MainScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <View>
                <StatusBar style={styles.statusBarBackground} />
                <FavoritesList navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        backgroundColor: "#30bced",
    },
    container: {
        backgroundColor: "#ffffff",
    },
});
