import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
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

export default CoinListHeader;
