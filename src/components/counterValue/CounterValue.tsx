import { FC } from "react";

interface CounterValueProps {
  value: number;
}

const CounterValue: FC<CounterValueProps> = ({ value }) => <h1>{value}</h1>;

export default CounterValue;
