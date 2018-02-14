import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
    Text,
    Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import { Action } from "../../types";
import { RootState, getAllCoins } from "../../rootReducer";
import { Coin } from "../../types";
import { StyleSheet } from "react-native";
import { addToFavorites, removeFromFavorites } from "../../watchList/actions";
import { fetchCoins } from "../../coins/actions";
import Icons from "../../utils/icons";
import numeral from "numeral";

interface Props {
    allCoins: Coin[];
    addToFavorites: (coin: Coin) => Action;
    removeFromFavorites: (coin: Coin) => Action;
    navigation: any;
}
interface State {
    searchText: string;
    searchResult: Coin[];
}

class Search extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            searchText: "",
            searchResult: [...this.props.allCoins],
        };
    }

    public render() {
        const { searchResult } = this.state;
        return (
            <View>
                {this.renderHeader()}
                {this.renderSearchBar()}
                {!searchResult || searchResult.length === 0 ? (
                    <View style={styles.placeholderContainer}>
                        <Text style={styles.placeholderText}>
                            We did not find the coin you searched for...
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
            <Text style={styles.headerText}>Search</Text>
            <TouchableOpacity
                style={styles.closeSearchButton}
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="close" size={20} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );

    private renderSearchBar = () => (
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
    );

    private renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} activeOpacity={0.7}>
            <View style={styles.itemLeft}>
                <View style={styles.itemSummary}>
                    <View style={styles.iconNameSymbol}>
                        <View style={styles.icon}>
                            <Image
                                source={Icons[item.symbol]}
                                style={styles.iconImage}
                            />
                        </View>
                        <View style={styles.nameSymbol}>
                            <Text style={styles.symbol}>{item.symbol}</Text>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </View>
                    <Text style={styles.price}>{numeral(item.price_usd).format("$0,0.00")}</Text>
                </View>
            </View>
            <View style={styles.itemRight}>
                <Icon name="keyboard-arrow-right" size={20} color="#303036" />
            </View>
        </TouchableOpacity>
    );

    private keyExtractor = item => item.id;

    private search = (searchText: string) => {
        const { allCoins } = this.props;
        this.setState({
            searchText,
            searchResult: !searchText
                ? [...allCoins]
                : allCoins.filter(
                    x =>
                        x.name
                            .toLowerCase()
                            .startsWith(searchText.toLowerCase()) ||
                        x.symbol
                            .toLowerCase()
                            .startsWith(searchText.toLowerCase())),
        });
    };

    private clear = () => {
        this.setState({
            searchText: "",
            searchResult: [...this.props.allCoins],
        });
    };
}

const mapStateToProps = (rootState: RootState) => ({
    allCoins: getAllCoins(rootState),
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
)(Search);

const styles = StyleSheet.create({
    header: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#30bced",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0 },
    },
    headerText: {
        flex: 0.9,
        fontSize: 18,
        fontFamily: "lato",
        color: "#fffaff",
        textAlign: "center",
        left: 15,
    },
    searchBoxContainer: {
        height: 40,
        flexDirection: "row",
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
    searchBox: {
        flex: 1,
        color: "#050401",
    },
    cancelSearchButton: {
        marginRight: 5,
    },
    closeSearchButton: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
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
    item: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        padding: 10,
        borderWidth: 0.4,
        borderColor: "#e2e2e2",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        elevation: 0,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    itemLeft: {
        flex: 0.95,
    },
    itemSummary: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    iconNameSymbol: {
        flexDirection: "row",
    },
    icon: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    iconImage: {
        height: 40,
        width: 40,
    },
    nameSymbol: {
        flexDirection: "column",
        left: 10,
    },
    symbol: {
        fontFamily: "lato",
        color: "#303036",
        fontSize: 20,
    },
    name: {
        fontFamily: "lato",
        color: "#303036",
        fontSize: 13,
    },
    price: {
        fontSize: 18,
        fontFamily: "lato",
        color: "#30bced",
        alignSelf: "center",
        right: 10,
    },
    itemRight: {
        flex: 0.05,
        justifyContent: "center",
        alignItems: "center",
    },
});
