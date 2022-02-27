import { FC } from "react";

interface IncreaseButtonProps {
  increaseFun: () => void;
}

const IncreaseButton: FC<IncreaseButtonProps> = ({ increaseFun }) => (
  <button onClick={increaseFun}>Add</button>
);

export default IncreaseButton;
