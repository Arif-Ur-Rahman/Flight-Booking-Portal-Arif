import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-xs-9 col-md-10">
            <div className="pull-left">
              <div id="logo" className="logo">
                <a href="https://flight.zoo.family" title="">
                  <img
                    id="siteLogo"
                    src="https://flight.zoo.family/front_asset/img/6593b7cb75748.gif"
                    className="img-responsive"
                    alt="Logo"
                    // style={height:"45px",margin-top: "8px"}
                  />
                </a>
              </div>
            </div>
            <div className="pull-right">
              <ul className="nav custom-nav">
                <li>
                  <span>
                    <i className="glyphicon glyphicon-earphone"></i>
                    +8801978-569290
                  </span>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-2 col-xs-3 currency-dropdown">
            <div id="changeMenu">
              <p id="tacc">
                <span
                  className="glyphicon glyphicon-user"
                  aria-hidden="true"
                ></span>
                Account
              </p>
              <div className="acc-Drop hidden" id="acc-Drop">
                <p>
                  Sign in or register to take advantage of exclusive
                  members-only deals!
                </p>
                <ul>
                  <li>
                    <a href="https://flight.zoo.family/login">Sign In</a>
                  </li>
                  <li>
                    <a href="https://flight.zoo.family/register">Register</a>
                  </li>
                  <li>
                    <a
                      className="btn btn-primary btn-block"
                      href="https://flight.zoo.family/register"
                    >
                      Register{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
