import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({ coin }) {
  const [coins, setCoins] = useState([]);
  async function getTopCoinsInfo(){
    const response = await fetch("https://api.coinlore.net/api/tickers/");
    const coinsData = await response.json();
    const top20Coins = coinsData.data.slice(0, 20);
    console.log(top20Coins[0]);
    setCoins(top20Coins);
  }
  useEffect(()=>{
    getTopCoinsInfo();
  }, []);
  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coins.map((coin) => (
          <CoinCard 
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            rank={coin.rank}
            price={coin.price_usd}
            key={coin.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CoinDisplay;
