import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Coin } from "../../main/model";

const { width, height } = Dimensions.get("window");

interface Props {
    navigation: any;
}
interface State { }

class CoinDetails extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    private renderHeader = (coin: Coin) => (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.goBack();
                }}
                style={styles.buttonContainer}
            >
                <Icon name="close" color="#050401" size={20} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.coinName}>{coin.name}</Text>
            </View>
        </View>
    );

    public render() {
        const { params } = this.props.navigation.state;
        return <View>{this.renderHeader(params)}</View>;
    }
}

export default CoinDetails;

const styles = StyleSheet.create({
    header: {
        height: height * 0.3,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 15,
        backgroundColor: "#fc5130",
    },
    buttonContainer: {
        flex: 0.1,
        width: width,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 10,
    },
    content: {
        flex: 0.9,
        justifyContent: "flex-start",
        alignSelf: "center",
    },
    coinName: {
        fontSize: 25,
        fontFamily: "lato",
        color: "#050401",
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        right: 10,
    },
    headerText: {
        fontSize: 20,
        fontFamily: "lato",
        color: "#fffaff",
    },
});
