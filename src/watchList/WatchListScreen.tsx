import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import WatchList from "./component/WatchList";
import { ScaledSheet } from "react-native-size-matters";

const { height } = Dimensions.get("window");

export interface State { }
export interface Props {
    navigation: any;
}

export default class WatchListScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <View style={styles.container}>
                <StatusBar style={styles.statusBarBackground} />
                <WatchList navigation={this.props.navigation} />
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
