// reusables
import Child from "../Child";
import DropDown from "../DropDown";

// custom hook
import UseToggle from "../../hooks/UseToggle";

// json data
import locationData from "../../json/locations.json";

// useStore from zustand
import useStore from "../../store";

const Locations = () => {
  const store = useStore();

  const [toggleLocations, setToggleLocations] = UseToggle(false);

  const locations = locationData.georgia;

  return (
    <DropDown
      header="Location"
      toggleClick={setToggleLocations}
      toggle={toggleLocations}
      Child={<Child data={locations} setItem={store.addLocation} />}
    />
  );
};

export default Locations;
