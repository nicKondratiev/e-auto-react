import UseToggle from "../hooks/UseToggle";
import { MouseEventHandler } from "react";
import carsData from "../db.json";

const Search = () => {
  const [manufacturer, toggleManufacturer] = UseToggle(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    toggleManufacturer();
  };

  carsData.map((car) => console.log(car.brand));

  return (
    <div className="text-2xl text-white">
      <div
        onClick={handleClick}
        className="w-fit cursor-pointer rounded-xl bg-orange-700 px-3 py-2"
      >
        <h1>Manufacturer</h1>
      </div>

      <div
        className={`${
          manufacturer ? "relative" : "hidden"
        } h-[350px] w-[350px] overflow-scroll rounded-xl bg-white`}
      >
        {carsData.map((car, id) => (
          <div className="text-black" key={id}>
            <p>{car.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
