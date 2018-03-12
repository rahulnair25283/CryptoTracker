import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import AppStatusBar from "../statusBar/StatusBar";
import CoinDetails from "./component/coinDetails";
import { ScaledSheet } from "react-native-size-matters";

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
                <AppStatusBar />
                <CoinDetails navigation={this.props.navigation} />
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
