import React from "react";
import { ordered, restocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const CakeSliceView = () => {
  const [value, setValue] = React.useState(1);
  const numOfCakes = useAppSelector((state) => {
    return state.cake.numOfCakes;
  });

  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Numbers of Cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Buy Cake</button>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value || "0"))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restocked Cake</button>
    </div>
  );
};
