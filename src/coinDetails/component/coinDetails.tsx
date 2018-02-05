import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    navigation: any;
}
interface State {}

class CoinDetails extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    private renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.goBack();
                }}
                style={styles.backButton}
            >
                <Icon name="arrow-back" color="#ffffff" size={20} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Coin Details</Text>
            </View>
        </View>
    );

    public render() {
        return <View>{this.renderHeader()}</View>;
    }
}

export default CoinDetails;

const styles = StyleSheet.create({
    header: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#30bced",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowColor: "black",
        shadowOffset: { height: 1, width: 0 },
    },
    backButton: {
        flex: 0.1,
    },
    headerTextContainer: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
        right: 10,
    },
    headerText: {
        fontSize: 18,
        fontFamily: "lato",
        color: "#fffaff",
    },
});
