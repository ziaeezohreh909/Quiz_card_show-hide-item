import { Box, Button } from "@chakra-ui/react";
interface counterType {
  count: number;
  handleIncrease: () => void;
  handledecrease: () => void;
}

export default function CounterComponent({
  count,
  handleIncrease,
  handledecrease,
}: counterType) {
  return (
    <Box className="flex p-5 bg-blue-500 items-center justify-center gap-5">
      <Button className="bg-white p-3 rounded-full" onClick={handleIncrease}>
        +
      </Button>
      <Box>{count}</Box>
      <Button className="bg-white p-3 rounded-full" onClick={handledecrease}>
        -
      </Button>
    </Box>
  );
}
