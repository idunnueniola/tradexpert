import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="theform">
        <div className="welcomew">
          <div>
            <h4>You're Almost In!</h4>
          </div>
          <div  className="welcomep">
            <p>Welcome Eniola</p>
          </div>
          <div>
            <img src={require("./images/mailing.png").default} />
          </div>
          <div className="p">
            <p>
              An activation link has been sent to <span></span>
               <a href="">idunnueniola@gmail.com</a> Please click on the link to
              verify your email and activate your TradExpress account.
            </p>
          </div>
          <div className="loginbutton">
            <button>
              <a href="">Continue</a>
            </button>
          </div>

          <div className="terms">
            <p>
              Didn't get an email? Kindly click <a href="">resend email</a>
            </p>
          </div>
          <div className="terms">
            <p>
              Wrong email supplied? <a href="">Edit email address</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
