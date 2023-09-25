import DropDown from "../../DropDown";
import FuelChild from "./FuelChild";

const Fuel = () => {
  return <DropDown header="Fuel" overflow="hidden" Child={<FuelChild />} />;
};
export default Fuel;
