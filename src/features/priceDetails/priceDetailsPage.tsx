import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { fetchDisplayBTC, fetchDisplayEUR } from '../priceDisplay/priceDisplaySlice';
import { RootState } from '../../app/rootReducer';
import CardPrice from '../../components/CardPrice';

export const PriceDetailsPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);

    const { priceBTConUSD, priceBTConEUR, valueEUR, valueUSD } = useSelector((state: RootState) => state.priceDisplay);

    useEffect(() => {
        dispatch(fetchDisplayBTC());
        dispatch(fetchDisplayEUR());
    }, [priceBTConUSD, priceBTConEUR, valueEUR, valueUSD, dispatch]);

    if (priceBTConUSD && priceBTConEUR && valueEUR && valueUSD && isLoading) {
        setLoading(false);
    }

    const recommendToBuy = (): JSX.Element => {
        let btcEurToUSD = priceBTConEUR * valueUSD;
        let percentage = ((btcEurToUSD - priceBTConUSD) / btcEurToUSD) * 100;
        return (
            <div className="shadow-lg p-3 m-4 rounded alert alert-success">
                <h5 className="font-weight-normal">
                    Si compras BTC usando EUR, te costará un <span className="font-weight-bold">{Math.round(Math.abs(percentage) * 10) / 10}%</span> {percentage < 0 ? 'menos.' : 'más.'}
                </h5>
            </div>
        );
    };

    return (
        <div>
            {isLoading ? (
                <p>Cargando ...</p>
            ) : (
                <>
                    <div className="d-flex">
                        <CardPrice price={priceBTConUSD} symbol={'$'} coin={'dólares'} />
                        <CardPrice price={priceBTConEUR} symbol={'€'} coin={'euros'} />
                    </div>
                    {recommendToBuy()}
                </>
            )}
        </div>
    );
};
