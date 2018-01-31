import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    navigateToFavorites: () => void;
    navigateToSearch: () => void;
}

const Header = (props: Props) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Coins</Text>
            </View>
            <View style={styles.favoritesButtonContainer}>
                <TouchableOpacity onPress={props.navigateToFavorites}>
                    <Icon name="favorite-border" color="#ffffff" size={20} />
                </TouchableOpacity>
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
        left: 20,
    },
    headerText: {
        fontSize: 18,
        fontFamily: "lato",
        color: "#fffaff",
    },
    favoritesButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
        right: 20,
    },
    searchButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Header;
