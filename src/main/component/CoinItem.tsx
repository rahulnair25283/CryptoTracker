import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Coin } from "../model";
import Icons from "../icons";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    data: Coin;
    addToFavorites: (coin: Coin) => Action;
    removeFromFavorites: (coin: Coin) => Action;
}
interface State {}

export default class CoinItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { data, addToFavorites, removeFromFavorites } = this.props;
        return (
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity>
                        <View style={styles.itemSummary}>
                            <View style={styles.icon}>
                                <Image
                                    source={Icons[data.symbol]}
                                    style={styles.iconImage}
                                />
                            </View>
                            <View style={styles.nameSymbol}>
                                <Text style={styles.symbol}>{data.symbol}</Text>
                                <Text style={styles.name}> | {data.name}</Text>
                            </View>
                            <Text style={styles.price}>$ {data.price_usd}</Text>
                        </View>
                        <View style={styles.itemDetails}>
                            <View style={styles.hourlyChange}>
                                <Text style={styles.changeLabel}>Hourly: </Text>
                                {Number.parseFloat(data.percent_change_1h) >
                                0 ? (
                                    <Text style={styles.changePositive}>
                                        {data.percent_change_1h}%
                                    </Text>
                                ) : (
                                    <Text style={styles.changeNegative}>
                                        {data.percent_change_1h}%
                                    </Text>
                                )}
                            </View>
                            <View style={styles.hourlyChange}>
                                <Text style={styles.changeLabel}>Daily: </Text>
                                {Number.parseFloat(data.percent_change_24h) >
                                0 ? (
                                    <Text style={styles.changePositive}>
                                        {data.percent_change_24h}%
                                    </Text>
                                ) : (
                                    <Text style={styles.changeNegative}>
                                        {data.percent_change_24h}%
                                    </Text>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemRight}>
                    <TouchableOpacity
                        style={styles.favorite}
                        onPress={() =>
                            data.favorite
                                ? removeFromFavorites(data)
                                : addToFavorites(data)
                        }
                    >
                        {data.favorite ? (
                            <Icon name="favorite" size={20} color="#fc5130" />
                        ) : (
                            <Icon
                                name="favorite-border"
                                size={20}
                                color="#fc5130"
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

import { StyleSheet } from "react-native";
import { Action } from "../../types";

const styles = StyleSheet.create({
    separator: {
        height: 0.5,
        backgroundColor: "#fc5130",
        marginLeft: "3%",
        marginRight: "3%",
    },
    item: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 4,
        marginBottom: 4,
        borderWidth: 0.5,
        borderColor: "#e2e2e2",
        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#FAFFFD",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
    },
    itemLeft: {
        display: "flex",
        flex: 0.9,
    },
    itemRight: {
        display: "flex",
        flex: 0.1,
    },
    itemSummary: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        top: -5,
    },
    iconImage: {
        height: 30,
        width: 30,
    },
    nameSymbol: {
        display: "flex",
        flexDirection: "row",
        left: 10,
        width: 190,
    },
    symbol: {
        fontFamily: "lato",
        fontWeight: "bold",
        color: "#050401",
        fontSize: 16,
    },
    name: {
        fontFamily: "lato",
        color: "#050401",
        fontSize: 16,
    },
    price: {
        fontFamily: "lato",
        fontWeight: "bold",
        color: "#303036",
    },
    itemDetails: {
        top: 5,
        left: 40,
        display: "flex",
        flexDirection: "row",
    },
    hourlyChange: {
        display: "flex",
        flexDirection: "row",
        width: 180,
    },
    changeLabel: {
        fontFamily: "lato",
        fontSize: 12,
        color: "#050401",
    },
    changePositive: {
        fontFamily: "lato",
        fontSize: 12,
        fontWeight: "bold",
        color: "green",
    },
    changeNegative: {
        fontFamily: "lato",
        fontSize: 12,
        fontWeight: "bold",
        color: "red",
    },
    favorite: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
