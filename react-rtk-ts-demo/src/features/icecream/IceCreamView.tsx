import React from "react";
import { ordered, restocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const IceCreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIceCream = useAppSelector((state) => {
    return state.iceCream.numOfIceCream;
  });

  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Numbers of Ice Cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Buy Ice Cream</button>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value || "0"))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restocked Ice Cream
      </button>
    </div>
  );
};
