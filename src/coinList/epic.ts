import {
    FETCH_COINS,
    fetchCoinsSucceeded,
    fetchCoinsFailed,
    fetchCoinsRequested,
} from "./actions";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/startWith";
import { Coin } from "../types";

const { ajax } = Observable;

const fetchCoinsEpic = action$ =>
    action$.ofType(FETCH_COINS).mergeMap(() =>
        ajax
            .getJSON("https://api.coinmarketcap.com/v1/ticker/")
            .map(response => fetchCoinsSucceeded(response as Coin[]))
            .catch(error => Observable.of(fetchCoinsFailed(error)))
            .startWith(fetchCoinsRequested()),
    );

export default fetchCoinsEpic;
