import FromTo from "../fromTo/FromTo";

import useStore from "../../../store";

const PriceChild = () => {
  const store = useStore();

  return (
    <div className="flex h-full flex-col">
      <FromTo
        fromVal={store.searchParams.price.from}
        toVal={store.searchParams.price.to}
        addFrom={store.addPriceFrom}
        addTo={store.addPriceTo}
      />
      <div>Fuel</div>
    </div>
  );
};
export default PriceChild;
