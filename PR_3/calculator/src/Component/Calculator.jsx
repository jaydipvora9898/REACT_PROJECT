import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else if (val === "Clear") {
      setValue("");
    } else if (val === "Back") {
      setValue(value.slice(0, -1)); 
    } else {
      setValue(value + val);
    }
  };

  return (

      <div className="calculator">
        <div className="buttons">
          <h2 id="value">{value}</h2>

          {/* Buttons */}
          <span onClick={() => handleClick("Clear")} id="clear">Clear</span>
          <span onClick={() => handleClick("Back")} id="back">⌫</span>
          <span onClick={() => handleClick("/")}>/</span>
          <span onClick={() => handleClick("*")}>*</span>

          <span onClick={() => handleClick("7")}>7</span>
          <span onClick={() => handleClick("8")}>8</span>
          <span onClick={() => handleClick("9")}>9</span>
          <span onClick={() => handleClick("-")}>-</span>

          <span onClick={() => handleClick("4")}>4</span>
          <span onClick={() => handleClick("5")}>5</span>
          <span onClick={() => handleClick("6")}>6</span>
          <span onClick={() => handleClick("+")} id="plus">+</span>

          <span onClick={() => handleClick("1")}>1</span>
          <span onClick={() => handleClick("2")}>2</span>
          <span onClick={() => handleClick("3")}>3</span>

          <span onClick={() => handleClick("0")}>0</span>
          <span onClick={() => handleClick("00")}>00</span>
          <span onClick={() => handleClick(".")}>.</span>
          <span onClick={() => handleClick("=")} id="equal">=</span>
        </div>
      </div>
  );
}

export default Calculator
