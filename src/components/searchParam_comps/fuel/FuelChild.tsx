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

  console.log(store.searchParams);

  return (
    <div className="p-4 text-base text-black">
      <div className="flex flex-wrap gap-[12px]">
        {fuelTypes.map((fuel, index) => (
          <label
            onClick={() => store.addFuelType(fuel)}
            className={
              "cursor-pointer rounded-lg border border-gray-300 px-3 py-0.5"
            }
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
