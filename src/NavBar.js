import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/instant">Instant Buy/Sell</Link>
              <Link to="/learn">Learn</Link>
            </div>
            <button className="one">
              <Link to="/login">Log In</Link>
            </button>
            <button className="two">
              <Link to="/getstarted">Get Started</Link>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
