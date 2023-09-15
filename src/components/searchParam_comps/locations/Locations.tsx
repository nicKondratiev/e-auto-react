// reusables
import Child from "../../Child";
import DropDown from "../../DropDown";

// json data
import locationData from "../../../json/locations.json";

// useStore from zustand
import useStore from "../../../store";

const Locations = () => {
  const store = useStore();

  const locations = locationData.georgia;

  return (
    <DropDown
      header="Location"
      Child={<Child data={locations} setItem={store.addLocation} />}
    />
  );
};

export default Locations;
