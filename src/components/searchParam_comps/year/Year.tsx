import DropDown from "../../DropDown";
import YearChild from "./YearChild";

function Year() {
  return <DropDown header="Year" Child={<YearChild />} />;
}
export default Year;
