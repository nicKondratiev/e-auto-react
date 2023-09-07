import Child from "./Child";

import locationData from "../../locations.json";

import UseToggle from "../../hooks/UseToggle";
import DropDown from "./DropDown";

//////////
import useStore from "../../store";

const Locations = () => {
  const store = useStore();

  const [toggleLocations, setToggleLocations] = UseToggle(false);

  const locations = locationData.georgia;

  // console.log(location);
  console.log(store.searchParams);

  return (
    <DropDown
      header="Location"
      toggleClick={setToggleLocations}
      toggle={toggleLocations}
      Child={<Child data={locations} setItem={store.addLocation} />}
      // Child={<Child data={locations} setItem={setLocation} />}
    />
  );
};

export default Locations;
