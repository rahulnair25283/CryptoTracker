import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import CoinDetails from "./component/coinDetails";

interface Props {
    navigation: any;
}

export default class CoinDetailsScreen extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <View>
                <StatusBar style={styles.statusBarBackground} />
                <CoinDetails navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        backgroundColor: "#fc5130",
    },
    container: {
        backgroundColor: "#ffffff",
    },
});
