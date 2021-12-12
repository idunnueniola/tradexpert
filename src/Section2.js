import React from "react";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="g">
      <div className="section2buy">
        <h4>Buy and Sell your Cryptocurrency in 3 simple steps</h4>
      </div>
      <div className="create">
        <div className="no1">
          <div className="no1left">
            <div className="numbering">1</div>
            <div className="h4p">
              <h4>Create a free Account</h4>
              <p>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our easy process to set up your profile.
              </p>
            </div>
          </div>
          <div className="no1right">
            <img src={require("./images/2.png").default} />
          </div>
        </div>
        <br /> <br />
        <div className="no2">
          <div className="no2left">
            <img src={require("./images/1.png").default} />
          </div>
          <div className="no2right">
            <div className="numbering">2</div>
            <div className="h4p">
              <h4>Deposit</h4>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="no3">
          <div className="no3left">
            <div className="numbering">3</div>
            <div className="h4p">
              <h4>Buy/ Sell Crypto</h4>
              <p>
                Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your
                wallet or send it easily to friends and family.
              </p>
            </div>
          </div>
          <div className="no3right">
            <img src={require("./images/2.png").default} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Section2;
