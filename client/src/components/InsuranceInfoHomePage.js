import React from "react";
import Navbar from "./Navbar";

function InsuranceInfoHomePage() {
  return (
    <>
      <Navbar />
      <div className="container-md my-5">
        <div style={{ backgroundColor: "#f7fdfb" }} className="row">
          <div style={{ border: "1px solid blue" }} className="col-4 border">
            <h1 style={{ color: "green" }}>Welcome to Source Insurance</h1>
            <h3>What we do:</h3>
            <ul>
              <li>
                Provide Business Property Insurance (Commercial Property
                Insurance) to IT Sectors
              </li>
              <li>
                Choose From plans that are easy to understand, provide
                comprehensive coverage, and give you lots of perks
              </li>
              <li>
                Use our app or website to find the right coverage and premium
                and earn rewards by staying active.
              </li>
            </ul>
            <div class="form-group">
              <button class="btn btn-primary float-right my-2" type="submit">
                Explore More
              </button>
            </div>
          </div>
          <div className="col-6">Kapil Mangla code here</div>
        </div>
      </div>
    </>
  );
}

export default InsuranceInfoHomePage;
