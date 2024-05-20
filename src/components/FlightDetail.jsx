import React from "react";

// FlightDetail Component
const FlightDetail = ({
  dateTime,
  flight_logo,
  arrivalLocation,
  departureLocation,
  equivalentCurrency,
  totalPrice,
  totalTaxAmount,
  flightDateTime,
  flightDateTimeEnd,
  airport,
  terminal,
  country,
  city,
}) => (
  <div className="search-list" data-provider="1S">
    <div className="round-multi-city-wrapper">
      <div className="round-multi-city-left">
        <div
          className="one-round-multi-city"
          id="round-multi-city-one"
          data-stopage="stop-3"
          data-carrier="EK,EK,EK"
          data-cabin="Y"
        >
          <div id="search-header">
            <p>{dateTime}</p>
            <div id="search-header-middle">
              <h3>{arrivalLocation}</h3>
              &nbsp;
              <img src={flight_logo} className="img-responsive" alt="" />
              &nbsp;
              <h3>{departureLocation}</h3>
            </div>
            <p></p>
          </div>
          <div className="search-content">
            <div>
              <img src="" className="img-responsive" alt="Logo" />
              <small>Terminal{`(${terminal})`}</small>
              <br />
              <small>
                <span className="operated-by">Airport:{airport}</span>
              </small>
            </div>
            <div>
              <h3> {flightDateTime}</h3>
              <small className="airport-name">{arrivalLocation}</small>
            </div>
            <div className="journey-partials">
              <div className="tag-area">
                <span>Country: {country}</span>
                <span>City: {city}</span>
              </div>
            </div>
            <div>
              <h3>{flightDateTimeEnd}</h3>
              <small className="airport-name">{departureLocation}</small>
            </div>
          </div>
        </div>
      </div>
      <div className="round-multi-city-right">
        <div className="binfo">
          <div id="center-align-div">
            <small className="fare-discount">
              {`${totalPrice}-${totalTaxAmount}%100`} Discount
            </small>
            <h4 className="text-center final-fare ">
              {equivalentCurrency} {totalPrice}
            </h4>
            <small className="fare-discount text-del ">
              {equivalentCurrency} {totalTaxAmount}
            </small>
            <p></p>
            <a className="btn btn-zoo" href="/">
              Book Now
            </a>
          </div>
          <div>
            <br />
            {/* <span className="booking-info">
              <i
                className="glyphicon glyphicon-question-sign bii"
                id="hover-icon"
              ></i>
              <div className="booking-info-data" style={{ display: "none" }}>
                <i className="glyphicon glyphicon-triangle-top bii-down"></i>
                <h4>Base Fare </h4>

                <div className="bi-info">
                  <p>Adult ( 1 x 139347)</p>
                  <p>BDT 139347</p>
                </div>

                <div className="bi-info">
                  <p>Total basefare</p>
                  <p>BDT 139347</p>
                </div>

                <h4>Discount</h4>
                <div className="bi-info">
                  <p>Total Discount</p>
                  <p> BDT 9754</p>
                </div>
                <h4>Taxes &amp; Charges</h4>
                <div className="bi-info">
                  <p>Taxes and Fees</p>
                  <p>BDT 20243</p>
                </div>
                <div className="bi-info">
                  <p>
                    <b className="bi-total">Total</b>
                  </p>
                  <p>BDT 149835 </p>
                </div>
              </div>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FlightDetail;
