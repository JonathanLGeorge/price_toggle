import React, { useState } from "react";

import "./App.css";
import Card from "./component/Card";

function App() {
  const cardInfo = [
    {
      type: "Basic",
      class: "price-box",
      monthly: 19.99,
      annually: 199.99,
      list1: "500 GB Storage",
      list2: "2 Users Allowed",
      list3: "Send up to 3 GB",
    },
    {
      type: "Professional",
      class: "price-box price-box-premium",
      monthly: 24.99,
      annually: 249.99,
      list1: "1 TB Storage",
      list2: "5 Users Allowed",
      list3: "Send up to 10 GB",
    },
    {
      type: "Master",
      class: "price-box",
      monthly: 39.99,
      annually: 399.99,
      list1: "2 TB Storage",
      list2: "10 Users Allowed",
      list3: "Send up to 20 GB",
    },
  ];
  const [toggled, toggle] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <h1>Our Pricing</h1>
        <div className="toggle-container">
          <span>Annually</span>
          <span>
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              onClick={() => {
                toggle((toggled) => !toggled);
              }}
            />
            <label htmlFor="toggle">
              <div className="ball"></div>
            </label>
          </span>
          <span>Monthly</span>
        </div>

        <div className="flex">
          {toggled && (
            <>
              <Card info={cardInfo[0]} pay={cardInfo[0].monthly} />
              <Card info={cardInfo[1]} pay={cardInfo[1].monthly} />
              <Card info={cardInfo[2]} pay={cardInfo[2].monthly} />
            </>
          )}
          {!toggled && (
            <>
              <Card info={cardInfo[0]} pay={cardInfo[0].annually} />
              <Card info={cardInfo[1]} pay={cardInfo[1].annually} />
              <Card info={cardInfo[2]} pay={cardInfo[2].annually} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
