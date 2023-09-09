// reusables
import Child from "../Child";
import DropDown from "../DropDown";

// custom hook
import UseToggle from "../../hooks/UseToggle";

// json data
import carsData from "../../json/carsData.json";

// useStore from zustand
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
