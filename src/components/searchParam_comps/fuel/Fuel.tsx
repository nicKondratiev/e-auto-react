import DropDown from "../../dropDown/DropDown";
import FuelChild from "./FuelChild";

const Fuel = () => {
  return <DropDown header="Fuel" overflow="hidden" Child={<FuelChild />} />;
};
export default Fuel;
