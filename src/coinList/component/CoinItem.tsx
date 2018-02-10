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
                            <Text style={styles.price}>{numeral(data.price_usd).format("$0,0.00")}</Text>
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
    item: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderWidth: 0.4,
        borderColor: "#e2e2e2",
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    itemLeft: {
        display: "flex",
        flexDirection: "row",
        flex: 0.85,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    itemRight: {
        display: "flex",
        flex: 0.15,
        alignItems: "center",
    },
    itemSummary: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
    },
    price: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 15,
        fontFamily: "lato",
        fontWeight: "bold",
        color: "#303036",
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconImage: {
        height: 30,
        width: 30,
    },
    nameSymbol: {
        display: "flex",
        flexDirection: "column",
        left: 10,
        width: 190,
    },
    symbol: {
        fontFamily: "lato",
        fontWeight: "bold",
        color: "#050401",
        fontSize: 20,
    },
    name: {
        fontFamily: "lato",
        color: "#050401",
        fontSize: 15,
    },
    itemDetails: {
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
        color: "#73a74a",
    },
    changeNegative: {
        fontFamily: "lato",
        fontSize: 12,
        fontWeight: "bold",
        color: "#ff5353",
    },
    favorite: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
