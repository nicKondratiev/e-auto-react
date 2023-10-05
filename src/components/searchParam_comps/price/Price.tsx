import DropDown from "../../dropDown/DropDown";
import PriceChild from "./PriceChild";

const Price = () => {
  return <DropDown header="Price" overflow="hidden" Child={<PriceChild />} />;
};
export default Price;
