import useStore from "../../../../store";
import DataList from "../../dataList/DataList";

const PriceSelection = () => {
  const store = useStore();
  const selectedPrice = store.searchParams.price;

  const prices = [5000, 10000, 15000, 20000, 30000, 50000, 100000];

  // if we have priceTo selected then we have to show the values only lower than it
  const pricesFrom = selectedPrice.to
    ? prices.filter((item) => item <= selectedPrice.to)
    : prices;

  // if we have priceFrom selected then we have to show the values only higher than it
  const pricesTo = selectedPrice.from
    ? prices.filter((item) => item >= selectedPrice.from)
    : prices;

  return (
    <div className="flex text-base text-black">
      <DataList items={pricesFrom} onClickHandler={store.addPriceFrom} />
      <DataList items={pricesTo} onClickHandler={store.addPriceTo} />
    </div>
  );
};
export default PriceSelection;
