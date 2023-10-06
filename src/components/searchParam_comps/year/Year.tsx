import DropDown from "../../dropDown/DropDown";
import YearChild from "./YearChild";

function Year() {
  return (
    <DropDown
      header="Year"
      canOpen={true}
      overflow="hidden"
      Child={<YearChild />}
    />
  );
}
export default Year;
