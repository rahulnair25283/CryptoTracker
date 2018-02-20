import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { Coin } from "../../types";
import Icons from "../../utils/icons";
import numeral from "numeral";
// import { PercentChange } from "../../coins/component/CoinItem";

const { width } = Dimensions.get("window");

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
            <TouchableOpacity onPress={() => this.setState({
                baseCurrency: this.state.baseCurrency === "usd" ? "btc" : "usd",
            })}
                style={styles.priceCard}
                activeOpacity={0.8}>
                {this.state.baseCurrency === "usd"
                    ? <Text style={styles.priceText}>{numeral(coin.price_usd).format("$0,0.00")}</Text>
                    : <Text style={styles.priceText}>
                        <FAIcon name="btc" size={50} /> {coin.price_btc}
                    </Text>}
                <View style={styles.marketCap}>
                    <Text style={styles.marketCapText}>{numeral(coin.market_cap_usd).format("$0,0.00 a")}</Text>
                    <Text style={styles.marketCapLabel}>market cap</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.graphCard}>
                <Text style={{ fontSize: 11, fontFamily: "lato", color: "grey" }}>We will be showing a chart here...</Text>
            </View>
            <View style={styles.percentChangeCard}>
                {this.percentChange(coin.percent_change_1h, "hourly")}
                {this.percentChange(coin.percent_change_24h, "daily")}
                {this.percentChange(coin.percent_change_7d, "weekly")}
            </View>
            <View style={styles.supplyCard}>
                {this.supply(coin.available_supply, "available")}
                {this.supply(coin.max_supply, "max")}
                {this.supply(coin.total_supply, "total")}
            </View>
            {/* <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
                {coin.favorite
                    ? <Icon name="star" size={30} color="#fc5130" />
                    : <Icon name="star-border" size={30} color="#fc5130" />}
            </TouchableOpacity> */}
        </View>
    );

    private percentChange = (value: string, label: string) =>
        <View style={styles.percentChange}>
            {Number.parseFloat(value) > 0
                ? <View style={styles.changeValue}>
                    <Text style={styles.changeValueTextPositive}>
                        {value}%
                    </Text>
                    <Icon name="arrow-upward" size={15} color="#3cb43c" />
                </View>
                : <View style={styles.changeValue}>
                    <Text style={styles.changeValueTextNegative}>
                        {value}%
                    </Text>
                    <Icon name="arrow-downward" size={15} color="#ff7040" />
                </View>}
            <Text style={styles.changeLabel}>{label}</Text>
        </View>

    private supply = (value: string, label: string) =>
        <View style={styles.supply}>
            <Text style={styles.supplyValue}>{numeral(value).format("0,0")}</Text>
            <Text style={styles.supplyLabel}>{label}</Text>
        </View>

    public render() {
        const { params } = this.props.navigation.state;
        return <View style={styles.container}>
            {this.renderHeader(params)}
            {this.renderBody(params)}
        </View>;
    }
}

export default CoinDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.2,
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
    body: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    priceCard: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderColor: "#e2e2e2",
        borderWidth: 0.4,
        borderRadius: 10,
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    priceText: {
        fontSize: 45,
        fontFamily: "lato",
        color: "#30bced",
        paddingBottom: 10,
    },
    marketCap: {
        justifyContent: "center",
        alignItems: "center",
    },
    marketCapText: {
        fontSize: 13,
        fontFamily: "lato",
        color: "#303036",
    },
    marketCapLabel: {
        fontSize: 11,
        fontFamily: "lato",
        color: "grey",
    },
    graphCard: {
        flex: 0.5,
        backgroundColor: "#ffffff",
        borderColor: "#e2e2e2",
        borderWidth: 0.4,
        borderRadius: 10,
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 10,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    percentChangeCard: {
        flex: 0.1,
        backgroundColor: "#ffffff",
        borderColor: "#e2e2e2",
        borderWidth: 0.4,
        borderRadius: 10,
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        padding: 20,
        marginBottom: 15,
    },
    percentChange: {
        alignItems: "center",
    },
    changeValue: {
        flexDirection: "row",
    },
    changeValueTextPositive: {
        fontFamily: "lato",
        fontSize: 11,
        color: "#3cb43c",
    },
    changeValueTextNegative: {
        fontFamily: "lato",
        fontSize: 11,
        color: "#ff7040",
    },
    changeLabel: {
        fontFamily: "lato",
        fontSize: 11,
        color: "#303036",
    },
    supplyCard: {
        flex: 0.1,
        backgroundColor: "#ffffff",
        borderColor: "#e2e2e2",
        borderWidth: 0.4,
        borderRadius: 10,
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        padding: 20,
        marginBottom: 15,
    },
    supply: {
        alignItems: "center",
    },
    supplyValue: {
        fontFamily: "lato",
        fontSize: 11,
        color: "#303036",
    },
    supplyLabel: {
        fontFamily: "lato",
        fontSize: 11,
        color: "grey",
    },
    fab: {
        position: "absolute",
        bottom: 10,
        height: 50,
        width: 50,
        borderRadius: 25,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    }
});
