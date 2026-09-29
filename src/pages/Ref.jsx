import { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();

    inputRef.current.style.color = "red";

    inputRef.current.placeholder = "Enter Password";

    inputRef.current.value = "123456787";
  };
  return (
    <div>
      <h1>Use Ref</h1>

      <input type="text" placeholder="Enter Name" ref={inputRef} />

      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default Ref;
