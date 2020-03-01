import React from 'react';

interface CardPriceProps {
    price: number;
    symbol: string;
    coin: string;
}

const CardPrice = ({ price, symbol, coin }: CardPriceProps): JSX.Element => {
    return (
        <div className="d-flex m-2 shadow-sm p-3 bg-white rounded">
            <div className="mr-2">
                <img className="icon-size-400" src="/img/bitcoin-logo.svg" alt="" />
            </div>
            <div className="d-flex flex-column align-items-start justify-content-center bd-highlight">
                <h6 className="h6 m-0 bd-highlight font-weight-light">
                    <span className="mr-3">Precio en {coin}</span>
                </h6>
                <h5 className="h5 m-0 bd-highlight">
                    <span className="mr-3">
                        1BTC = {price} {symbol}
                    </span>
                </h5>
            </div>
        </div>
    );
};

export default CardPrice;
