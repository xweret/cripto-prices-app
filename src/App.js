import { useEffect, useState } from 'react';
import './App.css';
import TableCoins from './components/TableCoins';
import axios from 'axios';
// descargamos a la biblioteca axios  para poder pedir la data de la api y despues la importamos
// importamos el useEffect para que se ejecute una sola vez, usamos el objeto vacio 
function App() {

  const [coins, setCoins] = useState([]);

  // usamos una funcion asincrona para pedir la data de la api

  const getData = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
  console.log(res.data)
  setCoins(res.data)
  }
  useEffect(() => {
    getData()
}, []);

  return (
    <div className="container">
      <div className="row"><TableCoins coins ={coins} /></div>

    </div>
  );
}



export default App;
