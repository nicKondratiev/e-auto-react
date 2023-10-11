import "./styles.css";

// searchParams
import Manufacturers from "../searchParam_comps/manufacturers/Manufacturers.tsx";
import Locations from "../searchParam_comps/locations/Locations.tsx";
import Models from "../searchParam_comps/models/Models.tsx";
import SearchButton from "./SearchButton.tsx";
import Clearance from "../searchParam_comps/clearance/Clearance.tsx";
import Year from "../searchParam_comps/year/Year.tsx";
import Price from "../searchParam_comps/price/Price.tsx";
import Fuel from "../searchParam_comps/fuel/Fuel.tsx";

const SearchComponent = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-none bg-white px-2 py-4 lg:grid lg:h-[170px] lg:grid-cols-4  lg:grid-rows-2 lg:rounded-xl xl:w-[800px]">
      <Manufacturers />
      <Models />
      <Locations />
      <Clearance />
      <Year />
      <Price />
      <Fuel />
      <SearchButton />
    </div>
  );
};

export default SearchComponent;
