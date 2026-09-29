import { useEffect, useState } from "react";
import Practice from "./Practice";
const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    callFunction();
  }, [data, count]);

  const callFunction = () => {
    console.log("Function Called");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello after 3 second data shown");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("5 second interval");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>React Hooks</h1>

      <h1>Count is : {count}</h1>
      <h1>Data is : {data}</h1>
      <Practice count={count} data={data} />

      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      <br />
      <br />
      <button onClick={() => setData(data + 1)}>Data: {data}</button>
    </div>
  );
};

export default UseEffect;
