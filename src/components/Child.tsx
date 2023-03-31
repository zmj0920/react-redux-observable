
const Child = (props: { msg: number; changCount: Function}) => {
  const { msg, changCount } = props;
  return (
    <div>
      {msg} <button onClick={() => changCount(msg + 1)}>子组件+</button>
    </div>
  );
};

export default Child;
