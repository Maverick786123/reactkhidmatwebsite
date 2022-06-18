import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <br />
      <br />
      <br />
      <h1>Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.discordapp.net/attachments/643501117095018506/987033861500309565/Untitled-3.png"
              text="Citizens can get the copy of an FIR from PKM by providing some basic information."
              label="Copy of FIR"
              path="/fir"
            />
            <CardItem
              src="https://media.discordapp.net/attachments/643501117095018506/987032895770230844/Untitled-2.png"
              text="PKM provides the facility to report the lost documents like CNIC, Driving License, ATM Card and other belongings."
              label="Loss Report"
              path="/lr"
            />
            <CardItem
              src="https://media.discordapp.net/attachments/643501117095018506/987036372261044234/unknown.png"
              text="PKM provides facility to report a crime, which is assigned to the relevant police station through the system"
              label="Crime Report"
              path="/cr"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
