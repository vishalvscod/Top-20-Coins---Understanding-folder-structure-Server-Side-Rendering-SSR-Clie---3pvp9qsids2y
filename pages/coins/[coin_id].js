import { useState, useEffect, } from "react";
import { useRouter } from "next/router";

function CoinDetail() {
  const [coin, setCoin] = useState(null);
  const router = useRouter();

  async function getCoinDetails(){
    const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${router.query.coin_id}`);
    const data = await response.json();
    console.log(data);
    setCoin(data[0]);
  }
  useEffect(()=>{
    getCoinDetails();
  },[])

  return (
    <div className="coin-detail">
      {coin && (  // Check if coin is truthy before accessing its properties
      <div className="name-symbol">
        <h1 className="name">{coin.name}</h1>
        <h2 className="symbol">{coin.symbol}</h2>
      </div>
      )}
      {coin && (  // Check if coin is truthy before accessing its properties
      <div className="market-description">
        <p className="coin-rank">Rank: {coin.rank}</p>  {/* Corrected property name */}
        <p className="coin-price">Price: {coin.price_usd}</p>
        <p className="coin-market-cap">Market Cap: {coin.market_cap_usd}</p>
        <p className="coin-total-supply">Total Supply: {coin.tsupply}</p>
        <p className="coin-max-supply">Max Supply: {coin.msupply}</p>
      </div>
     )}
    </div>
  );
}

export default CoinDetail;
