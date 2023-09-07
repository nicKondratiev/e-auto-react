// searchParams
import Manufacturers from "./searchParam_comps/Manufacturers";
import Locations from "./searchParam_comps/Locations";
import Models from "./searchParam_comps/Models";

// useStore from zustand
import useStore from "../store";

const Search = () => {
  const store = useStore();
  console.log(store.searchParams);

  return (
    <div>
      <div className="grid h-[200px] w-[800px] grid-cols-4 grid-rows-2 items-center rounded-xl bg-white">
        <Manufacturers />
        <Models />
        <Locations />
      </div>
    </div>
  );
};

export default Search;
