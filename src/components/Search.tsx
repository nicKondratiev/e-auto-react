// searchParams
import Manufacturers from "./searchParam_comps/manufacturers/Manufacturers.tsx";
import Locations from "./searchParam_comps/locations/Locations.tsx";
import Models from "./searchParam_comps/models/Models.tsx";

// useStore from zustand
import useStore from "../store";
import Button from "./Button";
import Clearence from "./searchParam_comps/clearance/Clearance.tsx";

const Search = () => {
  const store = useStore();
  console.log(store.searchParams);

  return (
    <div>
      <div className="grid h-[200px] w-[800px] grid-cols-4 grid-rows-3 items-center gap-2 rounded-xl bg-white">
        <Manufacturers />
        <Models />
        <Locations />
        <Clearence />
        <Button />
      </div>
    </div>
  );
};

export default Search;
