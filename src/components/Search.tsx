import { MouseEventHandler } from "react";

//custom hook
import UseToggle from "../hooks/UseToggle";

// json file
import carsData from "../db.json";

// reusable component
import Filter from "./Filter";

const Search = () => {
  const [toggleManu, setToggleManu] = UseToggle(false);
  const [toggleModels, setToggleModels] = UseToggle(false);

  const handleManu: MouseEventHandler<HTMLDivElement> = () => {
    setToggleManu();
  };

  const handleModels: MouseEventHandler<HTMLDivElement> = () => {
    setToggleModels();
  };

  // we iterate over carsData and return only car manufacturers/brands
  const manufacturers = carsData.map((car) => car.brand);

  return (
    <div>
      <Filter
        header="Manufacturer"
        handleClick={handleManu}
        toggle={toggleManu}
        data={manufacturers}
      />
      <Filter
        header="Models"
        handleClick={handleModels}
        toggle={toggleModels}
        data={manufacturers}
      />
    </div>
  );
};

export default Search;
