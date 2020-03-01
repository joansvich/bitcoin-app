import axios from 'axios';

export interface BlockChainArray {
    '15m': number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
}

export interface BlockChainResponse {
    USD: BlockChainArray;
    EUR: BlockChainArray;
}

export interface GetPriceResult {
    blockchainResponse: BlockChainResponse;
}

export interface GetPairEurUsdResponse {
    exchangeResponse: ExchangeResponse;
}

export interface Rates {
  USD: number
}

export interface ExchangeResponse {
  rates: Rates,
  base: string,
  date: Date
}

export async function getPriceBTC(): Promise<GetPriceResult> {
    const url = `https://blockchain.info/ticker`;

    try {
        const blockchainResponse = await axios.get<BlockChainResponse>(url);
        return {
            blockchainResponse: blockchainResponse.data,
        };
    } catch (err) {
        throw err;
    }
}

export async function getPairEurUsd(): Promise<GetPairEurUsdResponse> {
    const url = `https://api.exchangeratesapi.io/latest`;

    try {
        const exchangeResponse = await axios.get<ExchangeResponse>(url);
        return {
            exchangeResponse: exchangeResponse.data,
        };
    } catch (err) {
        throw err;
    }
}
