import { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);
  const handerClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setNumber(num + 1);
        console.log(num);
      }, 1000);
    }
  };
  return <button onClick={handerClick}>{num}</button>;
};

const DemoState = () => {
  /* number为此时state读取值 ，setNumber为派发更新的函数 */
  const [number, setNumber] = useState(0); /* 0为初始值 */

  return (
    <div>
      <span>{number}</span>
      <Counter />
      <button
        onClick={() => {
          setNumber(number + 1);
          console.log(number); /* 这里的number是不能够即使改变的  */
        }}
      >
        count
      </button>
    </div>
  );
};

export default DemoState;
