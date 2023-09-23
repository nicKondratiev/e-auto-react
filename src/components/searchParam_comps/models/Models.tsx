// reusables
import Child from "../../Child";
import DropDown from "../../DropDown";

// json data
import carsData from "../../../json/carsData.json";

// useStore from zustand
import useStore from "../../../store";

const Models = () => {
  const store = useStore();

  // filter carsData so it will only show models of selected manufacturer
  const chosenManu = carsData.filter(
    (car) => car.brand === store.searchParams.manu
  );

  const models = chosenManu[0]?.models;

  return (
    <DropDown
      header="Models"
      overflow="scroll"
      Child={
        <Child
          data={models}
          setItem={store.addModel}
          item={store.searchParams.model}
        />
      }
    />
  );
};

export default Models;
