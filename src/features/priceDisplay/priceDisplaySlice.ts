import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../app/store'
import { GetPriceResult, GetPairEurUsdResponse } from '../../api/api';
import { getPriceBTC, getPairEurUsd } from '../../api/api';

interface PriceDisplay {
    priceBTConUSD: number,
    priceBTConEUR: number,
    valueEUR: number,
    valueUSD: number
}

type PriceDisplayState = {
    error: string | null
} & PriceDisplay

let initialState: PriceDisplayState = {
    priceBTConUSD: 0,
    priceBTConEUR: 0,
    valueEUR: 0,
    valueUSD: 0,
    error: null
}

const priceDisplaySlice = createSlice({
    name: 'priceDisplay',
    initialState,
    reducers: {
        setPriceBTC(state, action: PayloadAction<GetPriceResult>) {
            state.priceBTConUSD = action.payload.blockchainResponse.USD['last'];
            state.priceBTConEUR = action.payload.blockchainResponse.EUR['last'];
        },
        setPriceBTCFailed(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setPairEurUsd(state, action: PayloadAction<GetPairEurUsdResponse>) {
            state.valueEUR = 1;
            state.valueUSD = action.payload.exchangeResponse.rates['USD'];
        },
        setPairEurUsdFailed(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
    }
})

export const {
    setPriceBTC,
    setPriceBTCFailed,
    setPairEurUsd,
    setPairEurUsdFailed
} = priceDisplaySlice.actions

export default priceDisplaySlice.reducer

export const fetchDisplayBTC = (): AppThunk => async dispatch => {
    try {
        const priceBTC = await getPriceBTC();
        dispatch(setPriceBTC(priceBTC))
    } catch (err) {
        dispatch(setPriceBTCFailed(err.toString()))
    }
}

export const fetchDisplayEUR = (): AppThunk => async dispatch => {
    try {
        const pairEurUsd = await getPairEurUsd();
        dispatch(setPairEurUsd(pairEurUsd))
    } catch (err) {
        dispatch(setPairEurUsdFailed(err.toString()))
    }
}
