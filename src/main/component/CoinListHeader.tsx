import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    navigateToSearch: () => void;
}

const CoinListHeader = (props: Props) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Cryptocurrencies</Text>
            </View>
            <View style={styles.searchButtonContainer}>
                <TouchableOpacity onPress={props.navigateToSearch}>
                    <Icon name="search" color="#ffffff" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#30bced",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowColor: "black",
        shadowOffset: { height: 1, width: 0 },
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 18,
        fontFamily: "lato",
        color: "#fffaff",
    },
    searchButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CoinListHeader;
