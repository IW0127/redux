import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./redux/counter/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const Increment = () => {
    dispatch(actions.increment());
  };

  return (
    <div>
      <h1>counter</h1>
      <h4>{counter}</h4>
      <button onClick={Increment}>Increment</button>
      <button onClick={() => dispatch(actions.decrements())}>Decrement</button>
      <button onClick={() => dispatch(actions.addBy(10))}>Add By 10</button>
    </div>
  );
}

export default App;
