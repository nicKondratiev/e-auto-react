import DropDown from "../../dropDown/DropDown";
import YearChild from "./YearChild";

function Year() {
  return <DropDown header="Year" overflow="hidden" Child={<YearChild />} />;
}
export default Year;
