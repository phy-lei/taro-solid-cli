import { View, Text, Button } from "@tarojs/components";
import { createSignal } from "solid-js";
import "./index.css";

export default function Index() {
  const [count, setCount] = createSignal(0);
  const [color, setColor] = createSignal('red')

  const handleClick = () => {
    setCount(count() + 1)
  }

  return (
    <View class="index">
      <Text style={`color: ${color()}`}>Hello world! </Text>
      <Text style={{color: color()}}>Hello world2! </Text>
      <Button onClick={() => setColor('blue')}>set style</Button>
      <View>{count()}</View>
      <Button onClick={handleClick}>add</Button>
      <View>{Math.random()}</View>
    </View>
  );
}
