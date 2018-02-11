import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
} from "react-native";
import { connect } from "react-redux";
import { RootState, getFavorites } from "../../rootReducer";
import { addToFavorites, removeFromFavorites } from "../actions";
import { Coin } from "../../types";
import { Action } from "../../types";
import CoinItem from "../../coinList/component/CoinItem";

interface Props {
    favorites: Coin[];
    addToFavorites: (coin: Coin) => Action;
    removeFromFavorites: (coin: Coin) => Action;
    navigation: any;
}
interface State { }

class WatchList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    private renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>Watch List</Text>
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
                            You haven't set up a watch list yet...
                        </Text>
                    </View>
                ) : (
                        <FlatList
                            data={favorites}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            style={styles.list}
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
            navigation={this.props.navigation}
        />
    );

    private keyExtractor = item => item.id;
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#30bced",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0 },
    },
    headerText: {
        fontSize: 18,
        fontFamily: "lato",
        color: "#fffaff",
    },
    placeholderContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    placeholderText: {
        fontSize: 12,
        fontFamily: "lato",
        color: "#303036",
        textAlign: "center",
    },
    list: {
        marginTop: 15,
    }
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
)(WatchList);
