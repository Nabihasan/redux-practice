import React from "react";
import { useSelector } from "react-redux";
const Count = () => {
  const count = useSelector((state) => state);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};
export default Count;
