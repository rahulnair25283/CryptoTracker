import React, { Component } from "react";
import TimerMixin from "react-timer-mixin";
import {
    FlatList,
    RefreshControl,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import CoinItem from "./CoinItem";
import { connect } from "react-redux";
import { RootState, getMainState } from "../../rootReducer";
import { MainState } from "../reducer";
import { fetchCoins } from "../actions";
import { addToFavorites, removeFromFavorites } from "../../favorites/actions";
import { Action } from "redux";
import { Coin } from "../model";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    mainState: MainState;
    fetchCoins: () => Action;
    addToFavorites: (coin: Coin) => Action;
    removeFromFavorites: (coin: Coin) => Action;
    navigation: any;
}

interface State {
    refreshing: boolean;
}

class CoinList extends Component<Props, State> {
    public state: State;
    private timer;

    constructor(props: Props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    public componentDidMount() {
        this.props.fetchCoins();
        this.timer = TimerMixin.setInterval(() => {
            this.props.fetchCoins();
        }, 5000);
    }

    public componentWillUnmount() {
        TimerMixin.clearInterval(this.timer);
    }

    public render() {
        const { data } = this.props.mainState;
        return (
            <View>
                {this.renderHeader()}
                <FlatList
                    data={data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                            tintColor="#fc5130"
                        />
                    }
                    style={styles.list}

                />
            </View>
        );
    }

    private renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Coins</Text>
            </View>
            <View style={styles.favoritesButtonContainer}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Favorites")}
                >
                    <Icon name="favorite-border" color="#ffffff" size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchButtonContainer}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Search")}
                >
                    <Icon name="search" color="#ffffff" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );

    private renderItem = ({ item }) => (
        <CoinItem
            data={item}
            addToFavorites={this.props.addToFavorites}
            removeFromFavorites={this.props.removeFromFavorites}
            navigation={this.props.navigation}
        />
    );

    private keyExtractor = item => item.id;

    private onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        this.props.fetchCoins();
        this.setState({
            refreshing: false,
        });
    };
}

const mapStateToProps = (rootState: RootState) => ({
    mainState: getMainState(rootState),
});

const mergeProps = (stateToProps, dispatchToProps, ownProps) => ({
    ...ownProps,
    ...stateToProps,
    ...dispatchToProps,
});

export default connect(
    mapStateToProps,
    {
        fetchCoins,
        addToFavorites,
        removeFromFavorites,
    },
    mergeProps,
)(CoinList);

const styles = StyleSheet.create({
    header: {
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
    list: {
        marginTop: 15,
    }
});
