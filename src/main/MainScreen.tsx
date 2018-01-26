import React, { Component } from "react";
import CoinList from "./component/CoinList";
import { View } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import styles from "./styles";
import CoinListHeader from "./component/CoinListHeader";

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
                <View style={styles.container}>
                    <CoinListHeader navigateToSearch={this.navigateToSearch} />
                    <CoinList />
                </View>
            </View>
        );
    }

    public navigateToSearch = () => {
        this.props.navigation.navigate("Search");
    };
}
