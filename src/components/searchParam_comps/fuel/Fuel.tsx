import DropDown from "../../dropDown/DropDown";
import FuelChild from "./FuelChild";

import useStore from "../../../store";

const Fuel = () => {
  const store = useStore();

  return (
    <DropDown
      item={store.searchParams.fuelType}
      header="Fuel"
      canOpen={true}
      Child={<FuelChild />}
    />
  );
};
export default Fuel;
