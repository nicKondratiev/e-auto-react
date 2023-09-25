const FuelChild = () => {
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

  return (
    <div className="p-4 text-base text-black">
      <div className="flex flex-wrap gap-[12px]">
        {fuelTypes.map((fuel, index) => (
          <label
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
