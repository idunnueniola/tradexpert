import React from "react";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div>
      <div className="theform">
        <div className="welcome">
          <p>Buy/Sell Instantly</p>
        </div>

        <div class="buttongrid">
          <div>
            <button className="individualbus">
              <Link to="/Instant">Buy</Link>
            </button>
          </div>
          <div>
            <button className="businessbus">
              <Link to="/Sell">Sell</Link>
            </button>
          </div>
        </div>
        <form action="" className="signup">
          <div className="pick">
            <label for="coin">Coin to Sell</label>
            <div>
              <select placeholder="Bitcoin(BTC)">
                <option value="Bitcoin(BTC)">Bitcoin(BTC)</option>
                <option value="Ethereum(ETH)">Ethereum(ETH)</option>
              </select>
            </div>
          </div>
          <br />
          <br />
          <div className="pick">
            <label for="coin">Currency</label>
            <div>
              <select placeholder="Naira(NGN)">
                <option value="Euro(Euro)">Euro(Euro)</option>
                <option value="USD(USD)">USD(USD)</option>
                <option value="Naira(NGN)">Naira(NGN)</option>
              </select>
            </div>
          </div>
          <br /> <br />
          <div className="pick">
            <div>
              <label for="Quantity">Quantity</label>
            </div>
            <div className="pick">
              <div>
                <input type="text" placeholder="Quantity" />
              </div>
            </div>
          </div>
          <br />
          <div className="pickbutton">
            <button>
              <a href="">Continue</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
