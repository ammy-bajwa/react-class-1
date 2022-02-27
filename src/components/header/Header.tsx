import { FC } from "react";

import "./header.css";

interface HeaderProps {
  name: string;
  age: number;
}

export const Header: FC<HeaderProps> = ({ name, age }) => {
  return (
    <h1>
      My name is {name} and age is {age}
    </h1>
  );
};

// export default Header;
