import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    navigateBack: () => void;
}
interface State {}

class FavoritesList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    private renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigateBack();
                }}
            >
                <Icon name="arrow-back" color="#ffffff" size={20} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Favorites</Text>
            </View>
        </View>
    );

    public render() {
        return (
            <View>
                {this.renderHeader()}
                <View />
            </View>
        );
    }
}

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
    headerTextContainer: {
        flex: 1,
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

export default FavoritesList;
