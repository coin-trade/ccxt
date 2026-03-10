import Exchange from './abstract/valr.js';
import type { Account, Balances, CrossBorrowRates, Currencies, Currency, DepositAddress, Dict, FundingRate, FundingRates, int, Int, LedgerEntry, Market, Num, OpenInterest, Order, OrderBook, OrderRequest, OrderSide, OrderType, Position, Str, Strings, Ticker, Tickers, Trade, TradingFees, Transaction, TransferEntry } from './base/types.js';
/**
 * @class valr
 * @augments Exchange
 */
export default class valr extends Exchange {
    describe(): any;
    checkRequiredSymbolArgument(methodName: string, symbol: string): void;
    checkRequiredCurrencyCodeArgument(methodName: string, code: string): void;
    isFiat(code: any): boolean;
    fetchTime(params?: {}): Promise<number>;
    fetchStatus(params?: {}): Promise<any>;
    fetchCurrencies(params?: {}): Promise<Currencies>;
    fetchMarkets(params?: {}): Promise<import("./base/types.js").MarketInterface[]>;
    parseMarket(market: any): Market;
    fetchTickers(symbols?: string[], params?: {}): Promise<Tickers>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTicker(ticker: object, market?: Market): Ticker;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchL3OrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchPermissions(params?: {}): Promise<{
        info: any;
        created: number;
        viewaccess: boolean;
        trade: boolean;
        cryptwithdraws: boolean;
        fiatwithdraws: boolean;
        transfers: boolean;
    }>;
    fetchBalance(params?: {}): Promise<Balances>;
    parseBalance(balances: any): Balances;
    fetchAccounts(params?: {}): Promise<Account[]>;
    parseAccount(account: any): Account;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseOrder(order: any, market?: Market): Order;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    createOrders(orders: OrderRequest[], params?: {}): Promise<Order[]>;
    editOrder(id: string, symbol: string, type: OrderType, side: OrderSide, amount?: Num, price?: Num, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<Order[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrade(trade: object, market?: Market): Trade;
    fetchTradingFees(params?: {}): Promise<TradingFees>;
    loadTradingFees(params?: {}): Promise<void>;
    fetchDepositAddress(code: string, params?: {}): Promise<DepositAddress>;
    parseDepositAddress(depositAddress: any, currency?: Currency): {
        currency: string;
        network: string;
        address: string;
        tag: string;
        info: any;
    };
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchLedger(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<LedgerEntry[]>;
    parseLedgerEntry(item: any, currency?: Currency): LedgerEntry;
    withdraw(code: string, amount: number, address: string, tag?: Str, params?: {}): Promise<Transaction>;
    parseTransaction(transaction: any, currency?: Currency): Transaction;
    parseTransactionHistory(transaction: any): Transaction;
    fetchCrossBorrowRates(params?: {}): Promise<CrossBorrowRates>;
    parseBorrowRate(info: any, currency?: Currency): Dict;
    fetchBorrowInterest(code?: Str, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").BorrowInterest[]>;
    parseBorrowInterest(info: any, market?: Market): {
        account: any;
        currency: string;
        interest: number;
        interestRate: number;
        amountBorrowed: number;
        timestamp: number;
        datetime: string;
        info: any;
    };
    transfer(code: string, amount: number, fromAccount: string, toAccount: string, params?: {}): Promise<TransferEntry>;
    fetchTransfers(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<TransferEntry[]>;
    parseTransfer(transfer: Dict, currency?: Currency): TransferEntry;
    fetchOpenInterest(symbol: string, params?: {}): Promise<OpenInterest>;
    parseOpenInterest(interest: any, market?: Market): OpenInterest;
    fetchFundingRates(symbols?: Strings, params?: {}): Promise<FundingRates>;
    parseFundingRate(contract: string, market?: Market): FundingRate;
    fetchPositionsForSymbol(symbol: string, params?: {}): Promise<Position[]>;
    fetchPositions(symbols?: Strings, params?: {}): Promise<Position[]>;
    parsePosition(position: Dict, market?: Market): Position;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(statusCode: int, statusText: string, url: string, method: string, responseHeaders: Dict, responseBody: string, response: any, requestHeaders: any, requestBody: any): any;
}
