import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { Coin } from "../../types";
import Icons from "../../utils/icons";
import numeral from "numeral";

const { width, height } = Dimensions.get("window");

interface Props {
    navigation: any;
}
interface State {
    baseCurrency: string;
}

class CoinDetails extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            baseCurrency: "usd",
        };
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
                <View style={styles.symbol}>
                    <Text style={styles.symbolText}>{coin.symbol}</Text>
                </View>
                <View style={styles.coinName}>
                    <Text style={styles.coinNameText}>{coin.name}</Text>
                </View>
            </View>
        </View>
    );

    private renderBody = (coin: Coin) => (
        <View style={styles.body}>
            <TouchableOpacity style={styles.price} onPress={() => this.setState({
                baseCurrency: this.state.baseCurrency === "usd" ? "btc" : "usd",
            })}>
                {this.state.baseCurrency === "usd"
                    ? <Text style={styles.priceText}>$ {coin.price_usd}</Text>
                    : <Text style={styles.priceText}>
                        <FAIcon name="btc" size={50} /> {coin.price_btc}
                    </Text>}
            </TouchableOpacity>
            <View style={styles.marketCap}>
                <Text style={styles.marketCapText}>Mkt {numeral(coin.market_cap_usd).format("$0,0.00 a")}</Text>
            </View>
            <View style={styles.percentChangeContainer}>
                <View style={styles.percentChange}>
                    {Number.parseFloat(coin.percent_change_1h) < 0
                        ? <Text style={styles.percentChangeNegative}>{coin.percent_change_1h}%</Text>
                        : <Text style={styles.percentChangePositive}>{coin.percent_change_1h}%</Text>}
                    <Text style={styles.percentChangeText}>Hourly</Text>
                </View>
                <View style={styles.percentChange}>
                    {Number.parseFloat(coin.percent_change_24h) < 0
                        ? <Text style={styles.percentChangeNegative}>{coin.percent_change_24h}%</Text>
                        : <Text style={styles.percentChangePositive}>{coin.percent_change_24h}%</Text>}
                    <Text style={styles.percentChangeText}>Daily</Text>
                </View>
                <View style={styles.percentChange}>
                    {Number.parseFloat(coin.percent_change_7d) < 0
                        ? <Text style={styles.percentChangeNegative}>{coin.percent_change_7d}%</Text>
                        : <Text style={styles.percentChangePositive}>{coin.percent_change_7d}%</Text>}
                    <Text style={styles.percentChangeText}>Weely</Text>
                </View>
            </View>
        </View>
    );

    public render() {
        const { params } = this.props.navigation.state;
        return <View>
            {this.renderHeader(params)}
            {this.renderBody(params)}
        </View>;
    }
}

export default CoinDetails;

const styles = StyleSheet.create({
    header: {
        height: height * 0.18,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 15,
        backgroundColor: "#30bced",
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
    iconImage: {
        height: 30,
        width: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    symbol: {
        justifyContent: "center",
        alignItems: "center",
    },
    symbolText: {
        fontSize: 30,
        fontFamily: "lato",
        color: "#ffffff",
        fontWeight: "bold",
    },
    coinName: {
        justifyContent: "center",
        alignItems: "center",
    },
    coinNameText: {
        fontSize: 15,
        fontFamily: "lato",
        color: "#ffffff",
    },
    body: {},
    price: {
        paddingTop: 30,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    priceText: {
        fontSize: 45,
        fontFamily: "lato",
        color: "#303036",
    },
    marketCap: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
    },
    marketCapText: {
        fontSize: 13,
        fontFamily: "lato",
        color: "#303036",
    },
    percentChangeContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10
    },
    percentChange: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    percentChangeNegative: {
        fontFamily: "lato",
        color: "#ff5353",
        fontWeight: "bold",
    },
    percentChangePositive: {
        fontFamily: "lato",
        color: "#73a74a",
        fontWeight: "bold",
    },
    percentChangeText: {
        fontFamily: "lato",
        color: "#303036",
    }
});
