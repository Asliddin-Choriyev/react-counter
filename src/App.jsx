import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  const tablo = document.querySelector(".tablo");

  const increment = () => {
    setCount(count + 1);
    if (count < 1000 && count > 98) {
      tablo.style.width = "280px";
    }
  };

  const decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      reset();
    }
    if (count < 102) {
      tablo.style.width = "200px";
    }
  };
  function reset() {
    setCount((count = 0));
  }

  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <div className="tablo">
        <h1>{count}</h1>
      </div>
      <div className="ctrls">
        <button id="plus" onClick={increment}>
          +
        </button>
        <button id="minus" onClick={decrement}>
          -
        </button>
      </div>
      <button id="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default Counter;
