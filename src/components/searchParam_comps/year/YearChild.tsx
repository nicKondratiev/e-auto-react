import FromTo from "../fromTo/FromTo";
import YearSelection from "./yearSelection/YearSelection";

import useStore from "../../../store";

const YearChild = () => {
  const store = useStore();

  return (
    <div className="flex h-full flex-col">
      <FromTo
        fromVal={store.searchParams.year.from}
        toVal={store.searchParams.year.to}
        addFrom={store.addYearFrom}
        addTo={store.addYearTo}
      />
      <YearSelection />
    </div>
  );
};
export default YearChild;
