import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { RootState, getFavorites } from "../../rootReducer";
import { addToFavorites, removeFromFavorites } from "../actions";
import { Coin } from "../../main/model";
import { Action } from "../../types";
import CoinItem from "../../main/component/CoinItem";

interface Props {
    favorites: Coin[];
    addToFavorites: (coin: Coin) => Action;
    removeFromFavorites: (coin: Coin) => Action;
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
        const { favorites } = this.props;
        return (
            <View>
                {this.renderHeader()}
                {!favorites || favorites.length === 0 ? (
                    <View style={styles.placeholderContainer}>
                        <Text style={styles.placeholderText}>
                            You don't have any favorites yet! Go click some
                            hearts and come back...
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        data={favorites}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                )}
            </View>
        );
    }

    private renderItem = ({ item }) => (
        <CoinItem
            data={item}
            addToFavorites={this.props.addToFavorites}
            removeFromFavorites={this.props.removeFromFavorites}
        />
    );

    private keyExtractor = item => item.id;
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
    placeholderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        height: "85%",
    },
    placeholderText: {
        fontSize: 12,
        fontFamily: "lato",
        color: "#fc5130",
        textAlign: "center",
    },
});

const mapStateToProps = (state: RootState) => ({
    favorites: getFavorites(state),
});

const mergeProps = (stateToProps, dispatchToProps, ownProps) => ({
    ...ownProps,
    ...stateToProps,
    ...dispatchToProps,
});

export default connect(
    mapStateToProps,
    { addToFavorites, removeFromFavorites },
    mergeProps,
)(FavoritesList);
