import React from "react";
import Sidebar from "./Bar";
import data from "./data/flight";
import FlightDetail from "./FlightDetail";
import flight_logo from "../assets/icons/plane-flight.png";

const ShowItems = () => {
  const result = data.result;
  console.log(result);
  return (
    <div className="container">
      <div className="row search-result">
        <div className="col-md-12 col-sm-12 top-filter"></div>
        <Sidebar />
        <div id="searchListContainer" className="col-sm-9">
          <div className="list skeleton">
            {result.map((flight, index) => (
              <FlightDetail
                key={index}
                dateTime={flight.legs[0].segment.departureDate}
                flight_logo={flight_logo}
                arrivalLocation={flight.legs[0].segment.arrivalLocation}
                departureLocation={flight.legs[0].segment.departureLocation}
                totalPrice={flight.totalPrice.totalPrice}
                equivalentCurrency={flight.totalPrice.equivalentCurrency}
                totalTaxAmount={flight.totalPrice.totalTaxAmount}
                flightDateTime={
                  flight.legs[0].segmentDetails[0].destination.timeZone
                }
                flightDateTimeEnd={
                  flight.legs[0].segmentDetails[0].origin.timeZone
                }
                airport={flight.legs[0].segmentDetails[0].destination.airport}
                terminal={flight.legs[0].segmentDetails[0].destination.terminal}
                country={flight.legs[0].segmentDetails[0].destination.country}
                city={flight.legs[0].segmentDetails[0].destination.city}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowItems;
