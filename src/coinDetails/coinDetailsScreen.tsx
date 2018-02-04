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
                <CoinDetails navigateBack={this.navigateBack} />
            </View>
        );
    }

    public navigateBack = () => {
        this.props.navigation.goBack();
    };
}

const styles = StyleSheet.create({
    statusBarBackground: {
        backgroundColor: "#30bced",
    },
    container: {
        backgroundColor: "#ffffff",
    },
});
