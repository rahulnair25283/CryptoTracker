import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Coin } from "../../types";
import Icons from "../../utils/icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import numeral from "numeral";

interface Props {
    data: Coin;
    addToFavorites: (coin: Coin) => Action;
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
            addToFavorites,
            removeFromFavorites,
            navigation,
        } = this.props;
        return (
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CoinDetails", data)}
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
                            <Text style={styles.price}>{numeral(data.price_usd).format("$0,0.00")}</Text>
                        </View>
                        <View style={styles.itemDetails}>
                            {this.percentChange(data.percent_change_1h, "hourly")}
                            {this.percentChange(data.percent_change_24h, "daily")}
                            {this.percentChange(data.percent_change_7d, "weekly")}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemRight}>
                    <TouchableOpacity
                        onPress={() =>
                            data.favorite
                                ? removeFromFavorites(data)
                                : addToFavorites(data)
                        }
                    >
                        {data.favorite ? (
                            <Icon name="start" size={25} color="#fc5130" />
                        ) : (
                                <Icon
                                    name="star-border"
                                    size={25}
                                    color="#fc5130"
                                />
                            )}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    private percentChange = (value: string, label: string) =>
        <View style={styles.percentChange}>
            <View style={styles.changeValue}>
                <Text style={styles.changeValueText}>{value}%</Text>
                {Number.parseFloat(value) > 0
                    ? <Icon name="arrow-upward" size={15} color="green" />
                    : <Icon name="arrow-downward" size={15} color="#ff7040" />}
            </View>
            <Text style={styles.changeLabel}>{label}</Text>
        </View>
}

import { StyleSheet } from "react-native";
import { Action } from "../../types";

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderWidth: 0.4,
        borderColor: "#e2e2e2",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    itemLeft: {
        flex: 0.85,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemSummary: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingBottom: 15,
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
        fontSize: 22,
        fontFamily: "lato",
        color: "#30bced",
    },
    itemRight: {
        flex: 0.15,
        alignItems: "center",
        paddingTop: 10,
    },
    itemDetails: {
        left: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    percentChange: {
        alignItems: "center",
    },
    changeLabel: {
        fontFamily: "lato",
        fontSize: 11,
        color: "grey",
    },
    changeValue: {
        flexDirection: "row",
    },
    changeValueText: {
        fontFamily: "lato",
        fontSize: 11,
    },
});
