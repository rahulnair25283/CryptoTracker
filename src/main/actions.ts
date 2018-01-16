import { Action } from "../types";

export const LOAD_CRYPTOS = "LOAD_CRYPTOS";
export const LOAD_CRYPTOS_REQUESTED = "LOAD_CRYPTOS_REQUESTED";
export const LOAD_CRYPTOS_SUCCEEDED = "LOAD_CRYPTOS_SUCCEEDED";
export const LOAD_CRYPTOS_FAILED = "LOAD_CRYPTOS_FAILED";

export const loadCryptos = (): Action => ({
    type: LOAD_CRYPTOS,
});

export const loadCryptosRequested = (): Action => ({
    type: LOAD_CRYPTOS_REQUESTED,
});