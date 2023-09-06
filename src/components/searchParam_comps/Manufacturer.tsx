import SearchParam from "./DropDown";
import Child from "./Child";
import UseToggle from "../../hooks/UseToggle";
import { MouseEventHandler, useState } from "react";
import carsData from "../../db.json";

const Manufacturer = () => {
  // manufacturer setter function
  const [manu, setManu] = useState<string>("");

  console.log(manu);

  // custom UseToggle hook for manufacturer
  const [toggleManu, setToggleManu] = UseToggle(false);

  // toggle handler for manufacturer
  const handleManu: MouseEventHandler<HTMLDivElement> = () => {
    setToggleManu();
  };

  // we iterate over carsData and return manufacturers array
  const manufacturers = carsData.map((car) => car.brand);

  console.log(manu);

  return (
    <div>
      <SearchParam
        header="Manufacturer"
        handleClick={handleManu}
        toggle={toggleManu}
        Child={<Child data={manufacturers} setItem={setManu} />}
      />
    </div>
  );
};

export default Manufacturer;
