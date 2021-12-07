import React from "react";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="sec">
        <div className="why">
          <h4>Why do people get involved with Cryptocurrencies?</h4>
        </div>
        <div className="grid">
          <div className="xgrid">
            <img src={require("./images/1.png").default} />
            <h4>Easy Mode of Payment</h4>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>
          <div className="ygrid">
            <img src={require("./images/2.png").default} />
            <h4>Financial Freedom</h4>
            <p>
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money.
            </p>
          </div>
          <div className="zgrid">
            <img src={require("./images/1.png").default} />
            <h4>Investment</h4>
            <p>
              The constant demand as made Cryptocurrecies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </div>
        </div>
        <div className="gridbtn">
          <a href="">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
