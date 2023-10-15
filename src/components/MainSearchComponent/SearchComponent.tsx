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
    <div className="flex w-full flex-col items-center gap-2 rounded-none bg-white px-2 py-4 md:grid md:h-[170px] md:grid-cols-4  md:grid-rows-2 md:rounded-xl lg:w-[800px]">
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
