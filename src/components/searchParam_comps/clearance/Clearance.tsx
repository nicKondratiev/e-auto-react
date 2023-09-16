// styles
import "./styles.css";

// useStore from zustand
import useStore from "../../../store";

export default function Clearance() {
  const store = useStore();

  // custom clearance setter function [1 === customs cleared, 0 === not cleared]
  const setCustom = (val: 1 | 0) => {
    store.addCustom(val);
  };

  return (
    <div className="flex items-center rounded-xl border">
      <div
        onClick={() => setCustom(1)}
        className={`clearanceButton rounded-l-xl`}
      >
        <p>Customs</p>
      </div>
      <div className="h-8 w-[1px] rounded-full bg-gray-200"></div>
      <div
        onClick={() => setCustom(0)}
        className="clearanceButton rounded-r-xl"
      >
        <p>Duty Free</p>
      </div>
    </div>
  );
}
