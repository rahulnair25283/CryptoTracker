import React, { Component } from "react";
import { View, TouchableOpacity, TextInput, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { searchCoin, clearSearch } from "../actions";
import { Action } from "../../types";
import { RootState, getSearchResult, getAllCoins } from "../../rootReducer";
import { Coin } from "../../main/model";
import CoinItem from "../../main/component/CoinItem";
import { StyleSheet } from "react-native";

interface Props {
    searchResult: Coin[];
    allCoins: Coin[];
    searchCoin: (searchText: String, allCoins: Coin[]) => Action;
    clearSearch: () => Action;
    navigateBack: () => void;
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
        return (
            <View>
                {this.renderHeader()}
                <FlatList
                    data={this.props.searchResult}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    private renderHeader = () => (
        <View style={styles.header}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.clearSearch();
                        this.props.navigateBack();
                    }}
                >
                    <Icon name="arrow-back" color="#ffffff" size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    placeholder={"Search for a coin..."}
                    autoFocus
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.searchBox}
                    onChangeText={searchText => this.search(searchText)}
                    value={this.state.searchText}
                />
                <TouchableOpacity
                    style={styles.cancelSearchButton}
                    onPress={() => this.clear()}
                >
                    <Icon name="close" color="#050401" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );

    private renderItem = ({ item }) => <CoinItem data={item} />;

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
    { searchCoin, clearSearch },
    mergeProps,
)(Search);

const styles = StyleSheet.create({
    header: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#30bced",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowColor: "black",
        shadowOffset: { height: 1, width: 0 },
    },
    searchBoxContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 20,
        flex: 0.9,
        backgroundColor: "#ffffff",
        borderRadius: 3,
    },
    searchBox: {
        flex: 1,
        padding: 5,
        color: "#050401",
    },
    cancelSearchButton: {
        marginRight: 5,
    },
});
