import DropDown from "../../dropDown/DropDown";
import YearChild from "./YearChild";

import useStore from "../../../store";
import { fromToSetter } from "../fromTo/FromTo";

function Year() {
  const store = useStore();

  const itemProp = fromToSetter(
    store.searchParams.year.from,
    store.searchParams.year.to,
    ""
  );

  return (
    <DropDown
      header="Year"
      item={itemProp}
      canOpen={true}
      Child={<YearChild />}
    />
  );
}
export default Year;
