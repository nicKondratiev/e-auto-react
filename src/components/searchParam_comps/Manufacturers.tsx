import DropDown from "./DropDown";
import Child from "./Child";

import carsData from "../../carsData.json";

import UseToggle from "../../hooks/UseToggle";

// import store
import useStore from "../../store";

const Manufacturers = () => {
  // store
  const store = useStore();

  const [toggleManu, setToggleManu] = UseToggle(false);

  const manufacturers = carsData.map((car) => car.brand);

  return (
    <DropDown
      header="Manufacturer"
      toggleClick={setToggleManu}
      toggle={toggleManu}
      Child={<Child data={manufacturers} setItem={store.addManu} />}
    />
  );
};

export default Manufacturers;
