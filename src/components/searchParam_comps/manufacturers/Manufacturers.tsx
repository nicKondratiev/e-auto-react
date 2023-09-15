// reusables
import Child from "../../Child";
import DropDown from "../../DropDown";

// json data
import carsData from "../../../json/carsData.json";

// useStore from zustand
import useStore from "../../../store";

const Manufacturers = () => {
  const store = useStore();

  const manufacturers = carsData.map((car) => car.brand);

  return (
    <DropDown
      header="Manufacturer"
      Child={<Child data={manufacturers} setItem={store.addManu} />}
    />
  );
};

export default Manufacturers;
