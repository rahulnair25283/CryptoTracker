import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Coin } from "../model";
import Icons from "../icons";

interface Props {
    data: Coin;
}
interface State {}

export default class CoinItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { data } = this.props;
        return (
            <TouchableOpacity>
                <View style={styles.item}>
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
                            {Number.parseFloat(data.percent_change_1h) > 0 ? (
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
                            {Number.parseFloat(data.percent_change_24h) > 0 ? (
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
                </View>
            </TouchableOpacity>
        );
    }
}

import { StyleSheet } from "react-native";

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
        flexDirection: "column",
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#FAFFFD",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
    },
    itemSummary: {
        display: "flex",
        flexDirection: "row",
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
        width: 150,
        left: 10,
    },
    symbol: {
        fontFamily: "lato",
        fontWeight: "bold",
        color: "#fc5130",
        fontSize: 16,
    },
    name: {
        fontFamily: "lato",
        color: "#fc5130",
        fontSize: 16,
    },
    price: {
        left: 50,
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
        width: 190,
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
});
