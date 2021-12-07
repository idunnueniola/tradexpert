import React from "react";

const NavBar = () => {
  return (
    <section className="first">
      <header>
        <div className="nav">
          <div className="leftheader">
            <h2>
              <img src={require("./images/tradexpresslogo.png").default} />
            </h2>
          </div>
          <div className="rightheader">
            <div className="firsta">
              <a href="">Instant Buy/Sell</a>
              <a href="">Learn</a>
            </div>
            <button className="one">
              <a href="/">Log In</a>
            </button>
            <button className="two">
              <a href="/">Get Started</a>
            </button>
          </div>
        </div>
      </header>
      <section className="body">
        <div>
          <div className="buy">
            <h3>Buy, sell and manage your Crypto on TradExpress.</h3>
            <p>
              Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
              NGN.
            </p>
          </div>{" "}
          <br /> <br />
          <div className="getstarted">
            <button>
              <a href="">Get Started</a>
            </button>
          </div>
          <br /> <br />
          <div className="btn">
            <button>
              <div>
                <a href="">
                  <img src={require("./images/applelogo.png").default} />
                </a>
              </div>
              <div>
                <p>Download on the</p>
                <h4>App Store</h4>
              </div>
            </button>
            <button>
              <div>
                <a href="">
                  <img src={require("./images/googleplay.png").default} />
                </a>
              </div>
              <div>
                <p>Get on</p>
                <h4>Google Play</h4>
              </div>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NavBar;
