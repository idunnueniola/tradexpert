import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <div className="theform">
        <div className="welcome">
          <p>Welcome!</p>
        </div>

        <div class="buttongrid">
          <div>
            <button className="individual">
              <Link to="/GetStarted">Individual</Link>
            </button>
          </div>
          <div>
            <button className="business">
              <Link to="/Business">Business</Link>
            </button>
          </div>
        </div>
        <form action="" className="signup">
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <input type="email" placeholder="E-mail" />
          </div>
          <div>
            <input type="phone" placeholder="Phone Number" />
          </div>
          <div>
            <input type="text" placeholder="Referral Code (Optional)" />
          </div>

          <div id="terms">
            <p>
              By clicking the Sign Up button below, you agree to TradExpress
              <a href="/">terms and service</a>
            </p>
          </div>
          <br />
          <br />
          <div className="signupbutton">
            <button>
              <p>Sign up</p>
            </button>
          </div>
          <h4>
            Already have an account ? <a href="/">Click here</a>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
