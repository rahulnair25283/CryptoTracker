import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Coin } from "../../types";
import Icons from "../../utils/icons";

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
                <Icon name="close" color="#ffffff" size={20} />
            </TouchableOpacity>
            <View style={styles.content}>
                <View style={styles.icon}>
                    <Image
                        source={Icons[coin.symbol]}
                        style={styles.iconImage}
                    />
                </View>
                <View style={styles.coinName}>
                    <Text style={styles.coinNameText}>{coin.name}</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>$ {coin.price_usd}</Text>
                    <Text style={styles.priceText}>  |  </Text>
                    <Text style={styles.priceText}>{coin.price_btc}</Text>
                </View>
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
    icon: {
        justifyContent: "center",
        alignItems: "center",
    },
    coinName: {
        alignItems: "center",
    },
    coinNameText: {
        fontSize: 30,
        fontFamily: "lato",
        color: "#ffffff",
        fontWeight: "bold",
    },
    iconImage: {
        height: 30,
        width: 30,
    },
    price: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceText: {
        fontSize: 18,
        fontFamily: "lato",
        color: "#ffffff",
        marginLeft: 2,
        marginRight: 2,
    }
});
