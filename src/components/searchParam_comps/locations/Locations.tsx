// reusables
import Child from "../../Child";
import DropDown from "../../dropDown/DropDown";

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
      canOpen={true}
      item={store.searchParams.location}
      Child={
        <Child
          data={locations}
          setItem={store.addLocation}
          item={store.searchParams.location}
        />
      }
    />
  );
};

export default Locations;
