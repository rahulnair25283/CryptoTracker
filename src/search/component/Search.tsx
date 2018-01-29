import React, { Component } from "react";
import { View, TouchableOpacity, TextInput, FlatList } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { searchCoin, clearSearch } from "../actions";
import { Action } from "../../types";
import { RootState, getSearchResult, getAllCoins } from "../../rootReducer";
import { Coin } from "../../main/model";
import CoinItem from "../../main/component/CoinItem";

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
                <TouchableOpacity onPress={this.props.navigateBack}>
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
