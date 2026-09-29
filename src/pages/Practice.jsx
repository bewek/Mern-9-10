import { useEffect } from "react";

const Practice = ({ count, data }) => {
  console.log(count, data);

  useEffect(() => {
    handleCounter();
  }, [count]);

  useEffect(() => {
    handleData();
  }, [data]);

  const handleCounter = () => {
    console.log("Counter Props Called");
  };
  const handleData = () => {
    console.log("Data Props Called");
  };

  return (
    <div>
      <h1>This is Test page</h1>
    </div>
  );
};

export default Practice;
