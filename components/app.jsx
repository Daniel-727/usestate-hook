import React from "react";

function App() {
  const [count, setCount] = React.useState(0); //useState is a react hook that lets us set the initial state by passing it in as an argument (in this case 0), useState returned two values: the current state and the function that updates the state, and we are storing the two return values by desctucturing [count, and setCount]; count is the value of the state. setCount is the function.

  function increment() {
    setCount(count + 1); //setCount is the function that updates the state, so in this setCount function we are taking the current state which is stored in count and updating it by adding 1. So after this function executes, the state of count will be incremented by 1
  }

  function decrement() { //does the same as above but decrements by 1 instead.
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
