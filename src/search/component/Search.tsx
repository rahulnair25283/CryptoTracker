import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { searchCoin, clearSearch } from "../actions";
import { Action } from "../../types";
import { RootState, getSearchResult, getAllCoins } from "../../rootReducer";
import { Coin } from "../../types";
import CoinItem from "../../coinList/component/CoinItem";
import { StyleSheet } from "react-native";
import { addToFavorites, removeFromFavorites } from "../../watchList/actions";

interface Props {
    searchResult: Coin[];
    allCoins: Coin[];
    searchCoin: (searchText: String, allCoins: Coin[]) => Action;
    clearSearch: () => Action;
    addToFavorites: (coin: Coin) => Action;
    removeFromFavorites: (coin: Coin) => Action;
    navigation: any;
}
interface State {
    searchText: string;
}

class Search extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            searchText: "",
        };
    }
    public render() {
        const { searchResult } = this.props;
        return (
            <View>
                {this.renderHeader()}
                {!searchResult || searchResult.length === 0 ? (
                    <View style={styles.placeholderContainer}>
                        <Text style={styles.placeholderText}>
                            Search for a coin, you'll feel better...
                        </Text>
                    </View>
                ) : (
                        <FlatList
                            data={searchResult}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            style={styles.list}
                        />
                    )}
            </View>
        );
    }

    private renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    placeholder={"Type to start searching..."}
                    autoFocus
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.searchBox}
                    onChangeText={searchText => this.search(searchText)}
                    value={this.state.searchText}
                />
                {this.state.searchText ? <TouchableOpacity
                    style={styles.cancelSearchButton}
                    onPress={() => this.clear()}
                >
                    <Icon name="close" color="#050401" size={20} />
                </TouchableOpacity> : null}
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

    private search = (searchText: string) => {
        this.setState({
            searchText,
        });
        this.props.searchCoin(searchText, this.props.allCoins);
    };

    private clear = () => {
        this.props.clearSearch();
        this.setState({
            searchText: "",
        });
    };
}

const mapStateToProps = (rootState: RootState) => ({
    searchResult: getSearchResult(rootState),
    allCoins: getAllCoins(rootState),
});

const mergeProps = (stateToProps, dispatchToProps, ownProps) => ({
    ...ownProps,
    ...stateToProps,
    ...dispatchToProps,
});

export default connect(
    mapStateToProps,
    { searchCoin, clearSearch, addToFavorites, removeFromFavorites },
    mergeProps,
)(Search);

const styles = StyleSheet.create({
    header: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#ffffff",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0 },
    },
    searchBoxContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 0.9,
        backgroundColor: "#ffffff",
    },
    searchBox: {
        flex: 1,
        color: "#050401",
    },
    cancelSearchButton: {
        marginRight: 5,
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
