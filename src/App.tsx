import { SetStateAction, useEffect, useState } from "react";
import DemoState from "./components/DemoState";
import "./App.css";
import Child from "./components/Child";
import {  appSlice, countDown, countUp } from './store/app.slice';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appSlice.actions.ping(10));
  }, []);

  const counts = useSelector((state: any) => state.app.count)

  return (
    <div className="App">
      {/* <DemoState /> */}
      <div>  {counts } ---- 111</div>
      <button onClick={() => dispatch(countDown())}>-</button>
      <button onClick={() => dispatch(countUp())}>+</button>
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>父组件{count}</div>
      <Child msg={count} changCount={(num: SetStateAction<number>) => setCount(num)} />
    </div>
  );
}

export default App;
