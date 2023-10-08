import useStore from "../../../store";

const FuelChild = () => {
  const store = useStore();

  const fuelTypes: string[] = [
    "Petrol",
    "Diesel",
    "Electric",
    "Hybrid",
    "Plug-in Hybrid",
    "LPG",
    "CNG",
    "Hydrogen",
  ];

  const isSelected = (fuel: string) => {
    return store.searchParams.fuelType === fuel;
  };

  const itemSetter = (fuel: string) => {
    if (isSelected(fuel)) {
      store.addFuelType("");
    } else {
      store.addFuelType(fuel);
    }
  };

  return (
    <div className="p-4 text-base text-black">
      <div className="flex flex-wrap gap-[12px]">
        {fuelTypes.map((fuel, index) => (
          <label
            onClick={() => itemSetter(fuel)}
            className={`${
              isSelected(fuel)
                ? "border-green-500 bg-green-100"
                : "border-gray-300 bg-white"
            } cursor-pointer rounded-lg border  px-3 py-0.5`}
            key={index}
          >
            + {fuel}
          </label>
        ))}
      </div>
    </div>
  );
};
export default FuelChild;
