import { MouseEventHandler, useState } from "react";

//custom hook
import UseToggle from "../hooks/UseToggle";

// json file
import carsData from "../db.json";

// reusable component
import Filter from "./Filter";

const Search = () => {
  // togglers
  const [toggleManu, setToggleManu] = UseToggle(false);
  const [toggleModels, setToggleModels] = UseToggle(false);

  // setters
  const [manu, setManu] = useState<string>("");
  const [model, setModel] = useState<string>("");
  console.log(manu);
  console.log(model);

  // toggle handlers
  const handleManu: MouseEventHandler<HTMLDivElement> = () => {
    setToggleManu();
  };

  const handleModels: MouseEventHandler<HTMLDivElement> = () => {
    setToggleModels();
  };

  // we iterate over carsData and return only car manufacturers/brands
  const manufacturers = carsData.map((car) => car.brand);
  const selectedManu = carsData.filter((car) => car.brand === manu);
  const models = selectedManu[0]?.models;

  console.log(models);

  return (
    <div>
      <Filter
        header="Manufacturer"
        handleClick={handleManu}
        toggle={toggleManu}
        data={manufacturers}
        setItem={setManu}
      />
      <Filter
        header="Models"
        handleClick={handleModels}
        toggle={toggleModels}
        data={models}
        setItem={setModel}
      />
    </div>
  );
};

export default Search;
