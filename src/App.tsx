import { SetStateAction, useEffect, useState } from "react";
import DemoState from "./components/DemoState";
import "./App.css";
import Child from "./components/Child";
import { appSlice, countDown, countUp } from './store/reducers';
import { useDispatch, useSelector } from "react-redux";
import { getCount, getUser } from "./store/selector";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appSlice.actions.fetchUser());
  }, []);

  const counts = useSelector(getCount)

  const user = useSelector(getUser)

  return (
    <div className="App">
      {/* <DemoState /> */}
      <div>id：{user.id}</div>
      <div>姓名：{user.username}</div>
      <div>性别：{user.sex}</div>
      <div>  {counts} ---- 111</div>
      <button onClick={() => dispatch(countDown())}>-</button>
      <button onClick={() => dispatch(countUp())}>+</button>
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>父组件{count}</div>
      <Child msg={count} changCount={(num: SetStateAction<number>) => setCount(num)} />
    </div>
  );
}

export default App;
