import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="theform">
        <div className="welcome">
          <p>Welcome Back!</p>
        </div>

        <form action="" className="signup">
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="text" placeholder="Business Name" />
          </div>

          <div className="forget">
            <div className="checkbox">
              <input type="checkbox" />
              <label For="Remember Password">Remember Password</label>
            </div>
            <div>
              <a href="/">Forgot Password?</a>
            </div>
          </div>
          <br />
          <br />
          <div className="loginbutton">
            <button>
              <Link to="/Welcome">Login</Link>
            </button>
          </div>
          <h4>
            New User? <a href="/">Click here</a>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
