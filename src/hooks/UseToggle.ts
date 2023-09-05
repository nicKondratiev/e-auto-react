import { useState } from "react";

type ToggleReturnType = [boolean, () => void];

const UseToggle = (initialVal: boolean): ToggleReturnType => {
  const [state, setState] = useState(initialVal);

  function toggle() {
    setState(!state);
  }

  return [state, toggle];
};

export default UseToggle;
