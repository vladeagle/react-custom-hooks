import { useReducer, useState } from "react";

export function useToggle(initVal = [false, true]) {
  const [valueToggle, setValueToggle] = useState(null);

  const [state, dispatch] = useReducer(reducer, initVal);

  function reducer(state, action) {
    const { type } = action;
    switch (type) {
      case "TOGGLE":
        let arr = [...state];
        let first = arr[0];
        let arrLen = arr.length;
        arr.splice(0, 1);
        arr[arrLen - 1] = first;
        state = [...arr];

        setValueToggle(state[0].toString());
        return state;

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
