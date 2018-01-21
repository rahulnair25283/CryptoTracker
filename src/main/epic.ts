import { FETCH_COINS } from "./actions";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

const { ajax } = Observable;

const fetchCoinsEpic = action$ =>
  action$
    .ofType(FETCH_COINS)
    .mergeMap(() =>
      ajax
        .getJSON("https://api.coinmarketcap.com/v1/ticker/")
        .map(response => console.log("RESPONSE FROM EPIC: ", response)),
    );

export default fetchCoinsEpic;
