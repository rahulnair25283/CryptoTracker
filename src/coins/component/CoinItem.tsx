import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Coin, Action } from "../../types";
import Icons from "../../utils/icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import numeral from "numeral";
import { StyleSheet } from "react-native";

interface Props {
    data: Coin;
    removeFromFavorites: (coin: Coin) => Action;
    navigation?: any;
}
interface State { }

export default class CoinItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const {
            data,
            navigation,
        } = this.props;
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("CoinDetails", data)}
                style={styles.item}
            >
                <View style={styles.itemSummary}>
                    <View style={styles.iconNameSymbol}>
                        <View style={styles.icon}>
                            <Image
                                source={Icons[data.symbol]}
                                style={styles.iconImage}
                            />
                        </View>
                        <View style={styles.nameSymbol}>
                            <Text style={styles.symbol}>{data.symbol}</Text>
                            <Text style={styles.name}>{data.name}</Text>
                        </View>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{numeral(data.price_usd).format("$0,0.00")}</Text>
                        <View style={styles.percentChange}>
                            {Number.parseFloat(data.percent_change_24h) > 0
                                ? <View style={styles.changeValue}>
                                    <Text style={styles.changeValueTextPositive}>
                                        {data.percent_change_24h}%
                                    </Text>
                                    <Icon name="arrow-upward" size={15} color="#3cb43c" />
                                </View>
                                : <View style={styles.changeValue}>
                                    <Text style={styles.changeValueTextNegative}>
                                        {data.percent_change_24h}%
                                    </Text>
                                    <Icon name="arrow-downward" size={15} color="#ff7040" />
                                </View>}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderWidth: 0.4,
        borderColor: "#e2e2e2",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 15,
    },
    itemSummary: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    iconNameSymbol: {
        flexDirection: "row",
    },
    icon: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    iconImage: {
        height: 40,
        width: 40,
    },
    nameSymbol: {
        flexDirection: "column",
        left: 10,
    },
    symbol: {
        fontFamily: "lato",
        color: "#303036",
        fontSize: 22,
    },
    name: {
        fontFamily: "lato",
        color: "#303036",
        fontSize: 13,
    },
    price: {
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    priceText: {
        fontSize: 22,
        fontFamily: "lato",
        color: "#303036",
    },
    percentChange: {
        alignItems: "flex-end",
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
});
