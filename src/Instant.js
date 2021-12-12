import React from "react";
import { Link } from "react-router-dom";

const Instant = () => {
  return (
    <div>
      <div className="theform">
        <div className="welcome">
          <p>Buy/Sell Instantly</p>
        </div>

        <div class="buttongrid">
          <div>
            <button className="individual">
              <Link to="/Instant">Buy</Link>
            </button>
          </div>
          <div>
            <button className="business">
              <Link to="/Sell">Sell</Link>
            </button>
          </div>
        </div>
        <form action="" className="signup">
          <div className="pick">
            <label for="coin">Coin to Buy</label>
            <div className="option">
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
            <div className="option">
              <select placeholder="Naira(NGN)">
                <option value="Euro(Euro)">Euro(Euro)</option>
                <option value="USD(USD)">USD(USD)</option>
                <option value="Naira(NGN)">Naira(NGN)</option>
              </select>
            </div>
          </div>
          <br /> <br />
          
          <div className="pick">
            <label for="Amount">Amount</label>

            <div className="option">
              <input type="text" placeholder="Amount" />
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

export default Instant;
