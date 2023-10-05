// searchParams
import Manufacturers from "./searchParam_comps/manufacturers/Manufacturers.tsx";
import Locations from "./searchParam_comps/locations/Locations.tsx";
import Models from "./searchParam_comps/models/Models.tsx";

// useStore from zustand
import SearchButton from "./SearchButton.tsx";
import Clearence from "./searchParam_comps/clearance/Clearance.tsx";
import Year from "./searchParam_comps/year/Year.tsx";
import Price from "./searchParam_comps/price/Price.tsx";
import Fuel from "./searchParam_comps/fuel/Fuel.tsx";

const Search = () => {
  return (
    <div>
      <div className="grid h-[200px] w-[800px] grid-cols-4 grid-rows-2 items-center gap-2 rounded-xl bg-white">
        <Manufacturers />
        <Models />
        <Locations />
        <Clearence />
        <Year />
        <Price />
        <Fuel />
        <SearchButton />
      </div>
    </div>
  );
};

export default Search;
