import DropDown from "../../dropDown/DropDown";
import PriceChild from "./PriceChild";

import useStore from "../../../store";

import { fromToSetter } from "../fromTo/FromTo";

const Price = () => {
  const store = useStore();

  const itemProp = fromToSetter(
    store.searchParams.price.from,
    store.searchParams.price.to,
    ""
  );
  return (
    <DropDown
      header="Price"
      item={itemProp}
      canOpen={true}
      Child={<PriceChild />}
    />
  );
};
export default Price;
