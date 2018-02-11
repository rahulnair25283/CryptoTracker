import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import CoinDetails from "./component/coinDetails";

const { height } = Dimensions.get("window");

interface Props {
    navigation: any;
}

export default class CoinDetailsScreen extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusBarBackground} />
                <CoinDetails navigation={this.props.navigation} />
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
        backgroundColor: "#30bced",
    },
});
