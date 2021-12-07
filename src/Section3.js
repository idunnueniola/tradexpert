import React from "react";

const Section3 = () => {
  return (
    <section className="section3">
      <div className="sec3">
        <div className="sec3ready">
          <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
          <h4>Create your account for free and start trading today!</h4>
          <br />
          <button>
            <a href="">Get Started</a>
          </button>
        </div>
        <br /> <br /> <br />
        <div className="sec3app">
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
              {" "}
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
  );
};

export default Section3;
