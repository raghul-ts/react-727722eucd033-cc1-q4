import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  // const [isActive,setIsActive] = useState(false)
  let timer;
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
  };

  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <div>
        
        <h1>Time: {count}</h1>
        <h3>seconds</h3>
      </div>
      {/* <h3>{count}</h3> */}
      <button onClick={handleStart} className="btn btn-primary">start</button>
      <button onClick={handleStop} className="btn btn-success">stop</button>
      <button onClick={handlereset} className="btn btn-danger">reset</button>
    </div>
  );
}
