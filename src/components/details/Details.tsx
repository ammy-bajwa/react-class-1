import { FC } from "react";

import "./details.css";

interface DetailsProps {
  userData: string;
}

const Details: FC<DetailsProps> = ({ userData }) => {
  return <p className="details-main-para">{userData}</p>;
};

export default Details;
