import { useState } from "react";
const ButtonClickExample = (props) => {
  //   let currentCount = 0;
  //!   readOnly var ,  update the variable   initilized value
  const [currentCount, setCurrentCount] = useState(1);
  const [firstName, setFirstName] = useState("Bob");

  function handleClick() {
    console.log("Click worked");
    // currentCount++;
    setCurrentCount(currentCount + 1);
    // console.log(currentCount);
  }
  return (
    <>
      <h2>Hello from Button Click Example</h2>
      <p>The current count is: {currentCount}</p>
      <button onClick={handleClick}>Click To Add One</button>
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <p>{firstName}</p>
    </>
  );
};

export default ButtonClickExample;
