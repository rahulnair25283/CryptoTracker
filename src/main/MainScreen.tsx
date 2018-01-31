import React, { Component } from "react";
import CoinList from "./component/CoinList";
import { View, StyleSheet } from "react-native";
import StatusBar from "../statusBar/StatusBar";
import Header from "./component/Header";

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
                    <Header
                        navigateToFavorites={this.navigateToFavorites}
                        navigateToSearch={this.navigateToSearch}
                    />
                    <CoinList />
                </View>
            </View>
        );
    }

    public navigateToSearch = () => {
        this.props.navigation.navigate("Search");
    };

    public navigateToFavorites = () => {
        this.props.navigation.navigate("Favorites");
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
