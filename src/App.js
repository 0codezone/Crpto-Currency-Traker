import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // fetch the data from the api
  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL);
      setCoins(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // filter the coins based on the search input
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>;
      </div>
    );
  }
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search your desired coin</h1>
        <form action="">
          <input
            type="text"
            className="coin-input"
            placeholder="Provide the coin name"
            onChange={handleChange}
          />
        </form>
      </div>
      <div style={{ width: "100%" }}>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              pricechange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
