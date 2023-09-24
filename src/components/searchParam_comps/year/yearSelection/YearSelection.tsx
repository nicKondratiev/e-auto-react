import { useMemo } from "react";

import "../styles.css";

import useStore from "../../../../store";
import DataList from "../../dataList/DataList";

const YearSelection = () => {
  const store = useStore();

  const yearsFrom = useMemo(() => {
    const years = [];
    // if we have yearsTo selected then we have to show the values only lower than it
    for (
      let i = store.searchParams.year.to ? store.searchParams.year.to : 2023;
      i >= 1970;
      i--
    ) {
      years.push(i);
    }
    return years;
  }, [store.searchParams.year.to]);

  const yearsTo = useMemo(() => {
    const years = [];
    // if we have yearsFrom selected then we have to show the valyes only higher than it
    for (
      let i = 2023;
      i >= (store.searchParams.year.from ? store.searchParams.year.from : 1970);
      i--
    ) {
      years.push(i);
    }
    return years;
  }, [store.searchParams.year.from]);

  return (
    <div className="flex flex-1 overflow-y-auto text-base text-black">
      <DataList items={yearsFrom} onClickHandler={store.addYearFrom} />
      <DataList items={yearsTo} onClickHandler={store.addYearTo} />
    </div>
  );
};

export default YearSelection;
