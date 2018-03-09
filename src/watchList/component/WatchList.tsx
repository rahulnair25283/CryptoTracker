import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { RootState, getWatchlist } from "../../rootReducer";
import { removeFromWatchlist } from "../actions";
import { fetchCoins } from "../../coins/actions";
import { Coin } from "../../types";
import { Action } from "../../types";
import CoinItem from "../../coins/component/CoinItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScaledSheet } from "react-native-size-matters";

interface Props {
    watchlist: Coin[];
    fetchCoins: () => Action;
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
        const { watchlist } = this.props;
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {!watchlist || watchlist.length === 0 ? (
                    <View style={styles.placeholderContainer}>
                        <Text style={styles.placeholderText}>
                            Hey noob, lets add some coins!
                        </Text>
                    </View>
                ) : (
                        <FlatList
                            data={watchlist}
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
            removeFromFavorites={this.props.removeFromFavorites}
            navigation={this.props.navigation}
        />
    );

    private keyExtractor = item => item.id;
}


const mapStateToProps = (state: RootState) => ({
    watchlist: getWatchlist(state),
});

const mergeProps = (stateToProps, dispatchToProps, ownProps) => ({
    ...ownProps,
    ...stateToProps,
    ...dispatchToProps,
});

export default connect(
    mapStateToProps,
    { fetchCoins, removeFromWatchlist },
    mergeProps,
)(WatchList);

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: "60@ms",
        justifyContent: "center",
        alignItems: "center",
        padding: "10@ms",
        backgroundColor: "#30bced",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0 },
    },
    headerText: {
        fontSize: "18@ms",
        fontFamily: "lato",
        color: "#fffaff",
    },
    placeholderContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: "30@ms",
    },
    placeholderText: {
        fontSize: "12@ms",
        fontFamily: "lato",
        color: "#303036",
        textAlign: "center",
    },
    list: {
        marginTop: "15@ms",
    },
    fab: {
        position: "absolute",
        bottom: "30@ms",
        right: "30@ms",
        height: "50@ms",
        width: "50@ms",
        backgroundColor: "#30bced",
        borderRadius: "25@ms",
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