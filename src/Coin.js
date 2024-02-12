import React from "react";
import "./Coin.css";

const Coin = ({ image, name, price, volume, pricechange, marketcap }) => {
  return (
    <>
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </div>
        <div className="coin-data">
          <div>
            <p className="coin-price">
              <b>Price: </b>Rs.{price}
            </p>
          </div>
          <div>
            {
              <p className="coin-volume">
                <b>Vol:</b>Rs.{volume.toLocaleString()}
              </p>
            }
          </div>
          <div>
            {pricechange !== undefined && (
              <p
                className={
                  pricechange < 0 ? "coin-percent red" : "coin-percent green"
                }
              >
                <b>PriceChange</b>: {pricechange.toFixed(2)}%
              </p>
            )}
          </div>
          <div>
            {marketcap && (
              <p className="coin-marketcap">
                <b>MrktCap</b>: Rs.{marketcap.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
