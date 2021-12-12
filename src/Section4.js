import React from "react";

const Section4 = () => {
  return (
    <section className="customer">
      <div className="customerr">
        <div className="cus">
          <h3>Customer's Review</h3>
        </div>
        <div className="griddiv">
          <div className="gridimage">
            <div>
              <img src={require("./images/customer.png").default} />
            </div>
            <div>
              <img src={require("./images/customer.png").default} />
            </div>
            <div>
              <img src={require("./images/customer.png").default} />
            </div>
          </div>
        </div>
        <div className="grid2">
          <div className="xgrid2">
            <div className="exclamation">
              <img src={require("./images/exclamation.png").default} />
            </div>
            <div className="trading">
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
          </div>
          <div className="ygrid2">
            <div className="exclamation">
              <img src={require("./images/exclamation.png").default} />
            </div>
            <div className="trading">
              <p>
                They have the best rate compared to other platforms with fast
                payout.
              </p>
            </div>
          </div>
          <div className="zgrid2">
            <div className="exclamation3">
              <img src={require("./images/exclamation.png").default} />
            </div>
            <div className="trading">
              <p>
                Easy to fund and withdraw coins or cash on their platform, I
                will definitely trade with them again.
              </p>
            </div>
          </div>
        </div>
        <div className="customerimages">
          <div className="ireti">
            <div>
              <img src={require("./images/headshot1.jpeg").default} />
            </div>
            <div className="iretitext">
              <h4>Ireti</h4>
              <p>Nigeria</p>
            </div>
          </div>
          <div className="ireti2">
            <div>
              <img src={require("./images/headshot2.jpeg").default} />
            </div>
            <div className="iretitext">
              <h4>Bayo</h4>
              <p>USA</p>
            </div>
          </div>
          <div className="ireti3">
            <div>
              <img src={require("./images/headshot3.jpeg").default} />
            </div>
            <div className="iretitext">
              <h4>Olagoke</h4>
              <p>Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
