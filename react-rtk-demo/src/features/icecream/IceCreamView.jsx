import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIceCream = useSelector((state) => {
    return state.iceCream.numOfIceCream;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Numbers of Ice Cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Buy Ice Cream</button>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value || 0))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restocked Ice Cream
      </button>
    </div>
  );
};
