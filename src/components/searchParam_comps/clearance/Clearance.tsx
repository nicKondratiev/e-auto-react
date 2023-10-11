// styles
import "./styles.css";

// useStore from zustand
import useStore from "../../../store";

import ClearanceButton from "./ClearenceButton";

export default function Clearance() {
  const store = useStore();

  // custom clearance setter function [1 === customs cleared, 0 === not cleared]
  const setCustom = (val: "1" | "0") => {
    // if search custom value equals to already setted custom value then it will be removed
    if (val === store.searchParams.custom) {
      store.addCustom("");
    } else {
      store.addCustom(val);
    }
  };

  return (
    <div className="flex w-full items-center justify-center rounded-lg lg:w-[180px]">
      <ClearanceButton
        value="Cleared"
        onClick={() => setCustom("0")}
        selected={store.searchParams.custom === "0"}
        side="left"
      />
      <div className="absolute z-20 h-8 w-[1px] rounded-full bg-gray-200"></div>
      <ClearanceButton
        value="Duty Free"
        onClick={() => setCustom("1")}
        selected={store.searchParams.custom === "1"}
        side="right"
      />
    </div>
  );
}
