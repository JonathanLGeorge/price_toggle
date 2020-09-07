import React from "react";
import "../App.css";

export default function Card(props) {
  console.log(props.info.type);
  return (
    <div className={props.info.class}>
      <h4>{props.info.type}</h4>
      <p>
        <span classname={props.info.annually}>${props.info.annually}</span>
      </p>
      <ul>
        <li>{props.info.list1}</li>
        <li>{props.info.list2}</li>
        <li>{props.info.list3}</li>
      </ul>
      <button>Learn More</button>
    </div>
  );
}
