import { useState } from "react";
import CounterComponent from "./Counter-component";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handledecrease = () => {
    !!count && setCount((prev) => prev - 1);
  };
  return (
    <CounterComponent
      count={count}
      handleIncrease={handleIncrease}
      handledecrease={handledecrease}
    />
  );
}
