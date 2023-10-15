// reusables
import Child from "../../dropDown/Child";
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
      canOpen={true}
      item={store.searchParams.manu}
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
