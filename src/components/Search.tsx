import { MouseEventHandler, useState } from "react";

//custom hook
import UseToggle from "../hooks/UseToggle";

// json file
import carsData from "../carsData.json";
import locationData from "../locations.json";

// reusable component
import DropDown from "./searchParam_comps/DropDown";
import Child from "./searchParam_comps/Child";

const Search = () => {
  // togglers
  const [toggleManu, setToggleManu] = UseToggle(false);
  const [toggleModels, setToggleModels] = UseToggle(false);
  const [toggleLocations, setToggleLocations] = UseToggle(false);

  // setters
  const [manu, setManu] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  console.log(manu);
  console.log(model);
  console.log(location);

  // toggle handlers
  const handleManu: MouseEventHandler<HTMLDivElement> = () => {
    setToggleManu();
  };

  const handleModels: MouseEventHandler<HTMLDivElement> = () => {
    setToggleModels();
  };

  const handleLocations: MouseEventHandler<HTMLDivElement> = () => {
    setToggleLocations();
  };

  // we iterate over carsData and return only car manufacturers/brands
  const manufacturers = carsData.map((car) => car.brand);
  const selectedManu = carsData.filter((car) => car.brand === manu);
  const models = selectedManu[0]?.models;
  const locations = locationData.georgia;

  return (
    <div>
      <div className="grid h-[200px] w-[800px] grid-cols-4 grid-rows-2 items-center rounded-xl bg-white">
        <DropDown
          header="Manufacturer"
          handleClick={handleManu}
          toggle={toggleManu}
          Child={<Child data={manufacturers} setItem={setManu} />}
        />

        <DropDown
          header="Models"
          handleClick={handleModels}
          toggle={toggleModels}
          Child={<Child data={models} setItem={setModel} />}
        />

        <DropDown
          header="Location"
          handleClick={handleLocations}
          toggle={toggleLocations}
          Child={<Child data={locations} setItem={setLocation} />}
        />
      </div>
    </div>
  );
};

export default Search;
