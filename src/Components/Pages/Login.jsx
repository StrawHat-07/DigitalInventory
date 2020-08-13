import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div class="cont">
        <div class="sidenav">
          <div class="login-main-text">
            <h1 className="font-weight-bold">
              Digital Inventory
              <br /> Login Page
            </h1>
            <p>Login with your airtel account here to access.</p>
          </div>
        </div>
        <div class="card-body">
          <div class="main">
            <div class="col-md-6 col-sm-12">
              <div class="login-form">
                <form>
                  <div class="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User Name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <Link to="/Home">
                    <button type="submit" class="btn btn-dark ml-5">
                      Login
                    </button>
                  </Link>
                  <Link to="/Home">
                    <button type="submit" class="btn btn-dark ml-3">
                      Continue Without Login
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
