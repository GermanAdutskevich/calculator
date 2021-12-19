import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const ops = ["+", "-", "/", "*", "."];

  const updateResult = (val) => {
    if (val === "-" && result === "0") {
      setInput(result + val);
    } else if (
      (ops.includes(val) && input === "0") ||
      (ops.includes(val) && result === "0") ||
      (ops.includes(val) && ops.includes(input.slice(-1)))
    ) {
      return;
    }
    setInput(input + val);
    setResult("");
  };

  const clearAll = () => {
    setInput("");
    setResult("0");
  };

  const digitsCreate = () => {
    let digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateResult(i.toString())}>{i}</button>
      );
    }
    return digits;
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
    setResult("0");
  };

  const outcome = () => {
    let lastChar = +input.charAt(input.length - 1);
    if (typeof lastChar === "number") {
      // eslint-disable-next-line
      setResult(eval(input));
      setInput("");
      console.log("number")
    } else {
      setResult("0");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="display">
          <span>{input || result}</span>
        </div>
        <div className="operators">
          <button onClick={() => updateResult("+")}>+</button>
          <button onClick={() => updateResult("-")}>-</button>
          <button onClick={() => updateResult("/")}>/</button>
          <button onClick={() => updateResult("*")}>*</button>
          <button onClick={() => deleteLast()}>DEL</button>
          <button onClick={() => clearAll()}>AC</button>
        </div>
        <div className="digits">
          {digitsCreate()}
          <button onClick={() => updateResult("0")}>0</button>
          <button onClick={() => updateResult(".")}>.</button>
          <button onClick={() => outcome()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
