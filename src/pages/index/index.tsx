import { createSignal } from "solid-js";
import "./index.css";

export default function Index() {
  const [count, setCount] = createSignal(0);
  const [color, setColor] = createSignal("red");

  const handleClick = () => {
    setCount(count() + 1);
  };

  return (
    <view class="index">
      <text style={`color: ${color()}`}>Hello world! </text>
      <text style={{ color: color() }}>Hello world2! </text>
      <button onClick={() => setColor("blue")}>set style</button>
      <view>{count()}</view>
      <button onClick={handleClick}>add</button>
      <view>{Math.random()}</view>
    </view>
  );
}
