import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="Home">
        <div className="body">
          <div>
            <div className="buy">
              <h3>Buy, sell and manage your Crypto on TradExpress.</h3>
              <br /> <br />
              <p>
                Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP
                with NGN.
              </p>
            </div>
            <br /> <br />
            <div className="getstarted">
              <button>
                <Link to="/GetStarted">Get Started </Link>
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
        </div>
      </section>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Home;
