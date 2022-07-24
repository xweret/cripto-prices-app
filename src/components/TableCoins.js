import React from 'react';
import CoinRow from './CoinRow';

// creo al tabla con los datos de la api

const TableCoins = ({coins}) => {

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin, index) => (
                    <CoinRow coin = {coin} key={index}/>
                ))}
            </tbody>
        </table>
        

    )
}

export default TableCoins;
