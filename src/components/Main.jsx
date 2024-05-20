import React, { useState } from "react";
import data from "./data/flight";

const Main = () => {
  const [isPassengerListVisible, setPassengerListVisibility] = useState(false);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const togglePassengerList = () => {
    setPassengerListVisibility(!isPassengerListVisible);
  };

  const handleDepartureChange = (e) => {
    const value = e.target.value.toUpperCase();
    setDeparture(value);
    checkLocations(value, arrival);
  };

  const handleArrivalChange = (e) => {
    const value = e.target.value.toUpperCase();
    setArrival(value);
    checkLocations(departure, value);
  };

  const checkLocations = (departure, arrival) => {
    const locationsExist = data.result.some(
      (flight) =>
        flight.legs[0].segment.departureLocation === departure &&
        flight.legs[0].segment.arrivalLocation === arrival
    );

    if (departure && arrival && !locationsExist) {
      setErrorMessage("City or flight doesn't exist, sorry.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Departure:", departure);
    console.log("Arrival:", arrival);
    // Additional form data can be logged here if needed
  };

  return (
    <section className="page-top">
      <div className="container">
        <div className="flight-search-box">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div id="mob-search-res" name="searchBTN">
                <section className="search-tabs-result">
                  <div className="box">
                    <div
                      id="tab-1"
                      className="tab-one-way-res tab-item tab-background tab-background-result"
                    >
                      <p className="hide-sm">One Way</p>
                    </div>
                    <div id="tab-1" className="tab-round-trip-res tab-item">
                      <p className="hide-sm">Round Trips</p>
                    </div>
                    <div id="tab-2" className="tab-item">
                      <p className="hide-sm">Multi-city</p>
                    </div>
                  </div>
                </section>
                <section className="tab-content">
                  <div className="container-box">
                    <div id="tab-1-content" className="tab-content-item show">
                      <form method="get" onSubmit={handleSubmit}>
                        <div className="round-one-form-result one-way-form-result">
                          <div>
                            <span className="fixed-placeholder">
                              Flying from
                            </span>
                            <input
                              type="text"
                              className="travel-input"
                              id="round-way-travel-from-input"
                              name="travel_from"
                              value={departure}
                              autoComplete="off"
                              onInput={handleDepartureChange}
                              placeholder="City or airport"
                            />
                            <span className="icon"></span>
                            <span id="dd"></span>
                          </div>
                          <div>
                            <span className="fixed-placeholder">Flying to</span>
                            <input
                              type="text"
                              className="travel-input"
                              id="round-way-travel-desti-input"
                              data-provide="typeahead"
                              name="travel_to"
                              value={arrival}
                              autoComplete="off"
                              onInput={handleArrivalChange}
                              placeholder="City or airport"
                            />
                            <span className="icon"></span>
                          </div>
                          <div>
                            <span className="fixed-placeholder">Departing</span>
                            <input
                              type="text"
                              id="ow-dep"
                              name="from_date"
                              autoComplete="off"
                              defaultValue="Thursday, 30 May, 2024"
                              placeholder="mm/dd/yyyy"
                              aria-label="Use the arrow keys to pick a date"
                            />
                            <span className="icon"></span>
                          </div>
                          <div className="return-to-result hidden">
                            <span className="fixed-placeholder">Returning</span>
                            <input
                              type="text"
                              id="rw-ret"
                              name="to_date"
                              autoComplete="off"
                              defaultValue=""
                              placeholder="mm/dd/yyyy"
                            />
                            <span className="icon"></span>
                          </div>
                          <div>
                            <span className="fixed-placeholder">Travelers</span>
                            <input
                              type="text"
                              id="round-way-travel-passenger-seat"
                              readOnly
                              autoComplete="off"
                              placeholder="1 Passenger, Economy"
                              onClick={togglePassengerList}
                            />
                            <span className="icon"></span>
                            {isPassengerListVisible && (
                              <div id="round-way-travel-passenger-list-result">
                                <div className="adult-qty">
                                  <div className="per-title">
                                    <h3>Adult</h3>
                                  </div>
                                  <div className="per-inc qtySelector">
                                    <i className="glyphicon glyphicon-minus decreaseQty"></i>
                                    <input
                                      type="text"
                                      name="adults"
                                      defaultValue="1"
                                      size="1"
                                      className="qtyValue"
                                    />
                                    <i className="glyphicon glyphicon-plus increaseQty"></i>
                                  </div>
                                </div>
                                <div className="adult-qty">
                                  <div className="per-title">
                                    <h3>Children</h3>
                                  </div>
                                  <div className="per-inc qtySelector">
                                    <i className="glyphicon glyphicon-minus decreaseQty"></i>
                                    <input
                                      type="text"
                                      name="childrens"
                                      defaultValue="0"
                                      size="1"
                                      className="qtyValue"
                                    />
                                    <i className="glyphicon glyphicon-plus increaseQty"></i>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          {errorMessage && (
                            <div className="error-message">{errorMessage}</div>
                          )}
                          <div>
                            <button id="round-way-submit-result" type="submit">
                              <i className="glyphicon glyphicon-search"></i>
                              Modify Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
