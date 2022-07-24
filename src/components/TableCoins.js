import React from 'react';
import CoinRow from './CoinRow';

// creo la tabla con los datos de la api

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

// other titles to use maybe = , 'Volume', 'Supply', 'Change 1h', 'Change 24h', 'Change 7d'

const TableCoins = ({coins, search}) => {

    // filtro la data de la api con el valor de la busqueda
    const filteredCoins= coins.filter((coin) => 
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
// recorro el array de titulos y los muestro en la tabla en el orden que se definio en el array
    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                
                <tr>
                    
                        {titles.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin = {coin} key={index} index={index+1}/>
                ))}
            </tbody>
        </table>
        

    )
}

export default TableCoins;
