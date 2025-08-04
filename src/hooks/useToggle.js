import { useReducer, useState } from "react";

export function useToggle(initVal = [false, true]) {
  const [valueToggle, setValueToggle] = useState(null);

  const [state, dispatch] = useReducer(reducer, initVal);

  function reducer(state, action) {
    const { type } = action;
    switch (type) {
      case "TOGGLE":
        setValueToggle(state[0].toString());
        const newArr = [...state.slice(1), state[0]];
        return newArr;

      case "SINGLE":
        setValueToggle(state);
        return state;

      default:
        setValueToggle(state);
        return state;
    }
  }

  function toggle() {
    dispatch({
      type: state instanceof Array ? "TOGGLE" : "SINGLE",
    });
  }

  return [valueToggle, toggle];
}
