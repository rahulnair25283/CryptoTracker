import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { RootState, getFavorites } from "../../rootReducer";
import { addToFavorites, removeFromFavorites } from "../actions";
import { fetchCoins } from "../../coins/actions";
import { Coin } from "../../types";
import { Action } from "../../types";
import CoinItem from "../../coins/component/CoinItem";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    favorites: Coin[];
    fetchCoins: () => Action;
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

    public componentDidMount() {
        this.props.fetchCoins();
    }

    private renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Watchlist</Text>
        </View>
    );

    public render() {
        const { favorites } = this.props;
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {!favorites || favorites.length === 0 ? (
                    <View style={styles.placeholderContainer}>
                        <Text style={styles.placeholderText}>
                            Hey noob, lets add some coins!
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
                <TouchableOpacity
                    style={styles.fab}
                    activeOpacity={0.7}
                    onPress={() => this.props.navigation.navigate("Search")}>
                    <Icon name="add" size={25} color="#ffffff" />
                </TouchableOpacity>
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
    container: {
        flex: 1,
    },
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
    },
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        height: 50,
        width: 50,
        backgroundColor: "#30bced",
        borderRadius: 25,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
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
    { fetchCoins, addToFavorites, removeFromFavorites },
    mergeProps,
)(WatchList);
