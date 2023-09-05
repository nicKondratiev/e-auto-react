import { useState } from "react";

const Search = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  console.log(toggle);

  return (
    <div className="text-2xl text-white">
      <div
        onClick={() => setToggle(!toggle)}
        className="w-fit cursor-pointer rounded-xl bg-orange-700 px-3 py-2"
      >
        <h1>Manufacturer</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Search;
