// searchParams
import Manufacturers from "./searchParam_comps/Manufacturers";
import Locations from "./searchParam_comps/Locations";
import Models from "./searchParam_comps/Models";

// useStore from zustand
import useStore from "../store";
import Button from "./Button";

const Search = () => {
  const store = useStore();
  console.log(store.searchParams);

  return (
    <div>
      <div className="grid h-[200px] w-[800px] grid-cols-4 grid-rows-3 items-center gap-2 rounded-xl bg-white">
        <Manufacturers />
        <Models />
        <Locations />
        <Button />
      </div>
    </div>
  );
};

export default Search;
