import React, { Component } from "react";
import TimerMixin from "react-timer-mixin";
import { FlatList, RefreshControl } from "react-native";
import CoinItem from "./CoinItem";
import { connect } from "react-redux";
import { RootState, getMainState } from "../../rootReducer";
import { MainState } from "../reducer";
import { fetchCoins } from "../actions";
import { addToFavorites, removeFromFavorites } from "../../favorites/actions";
import { Action } from "redux";
import { Coin } from "../model";

interface Props {
    mainState: MainState;
    fetchCoins: () => Action;
    addToFavorites: (coin: Coin) => Action;
    removeFromFavorites: (coin: Coin) => Action;
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
            />
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

const stateToProps = (rootState: RootState) => ({
    mainState: getMainState(rootState),
});

export default connect(stateToProps, {
    fetchCoins,
    addToFavorites,
    removeFromFavorites,
})(CoinList);
