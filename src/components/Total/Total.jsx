import React from "react";
import { useContext } from "react";
import { TotalContext} from "../../App";
import "./Total-style.css";


const Total = () => {
  const { totalWorth } = useContext(TotalContext);

  function numberWithCommas(x) {
    if (x === undefined) {
        // x değeri undefined ise güvenli bir değer döndür
        return "0";
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


  return (
    <div className="total-container">
      <h2> ${numberWithCommas(totalWorth)}</h2>
    </div>
  );
};

export default Total;
