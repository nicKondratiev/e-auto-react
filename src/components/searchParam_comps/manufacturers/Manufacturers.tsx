// reusables
import Child from "../../Child";
import DropDown from "../../dropDown/DropDown";

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
      overflow="scroll"
      canOpen={true}
      Child={
        <Child
          data={manufacturers}
          item={store.searchParams.manu}
          setItem={store.addManu}
        />
      }
    />
  );
};

export default Manufacturers;
