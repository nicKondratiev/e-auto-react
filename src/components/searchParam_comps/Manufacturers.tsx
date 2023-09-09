// reusables
import Child from "../Child";
import DropDown from "../DropDown";

// custom hook
import UseToggle from "../../hooks/UseToggle";

// json data
import carsData from "../../json/carsData.json";

// useStore from zustand
import useStore from "../../store";

const Manufacturers = () => {
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
