import DropDown from "./DropDown";
import carsData from "../../carsData.json";

import UseToggle from "../../hooks/UseToggle";

import Child from "./Child";

import useStore from "../../store";

const Models = () => {
  const store = useStore();

  const [toggleModels, setToggleModels] = UseToggle(false);

  // filter carsData so it will only show models of selected manufacturer
  const chosenManu = carsData.filter(
    (car) => car.brand === store.searchParams.manu
  );

  const models = chosenManu[0]?.models;

  return (
    <DropDown
      header="Models"
      toggleClick={setToggleModels}
      toggle={toggleModels}
      Child={<Child data={models} setItem={store.addModel} />}
    />
  );
};

export default Models;
