import { MouseEventHandler } from "react";

type FilterProps = {
  header: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
  toggle: boolean;
  data: string[];
};

// filter component renders based on received props
const Filter = ({ header, handleClick, toggle, data }: FilterProps) => {
  return (
    <div className="text-2xl text-white">
      <div
        onClick={handleClick}
        className="w-fit cursor-pointer rounded-xl bg-orange-700 px-3 py-2"
      >
        <h1>{header}</h1>
      </div>

      <div
        className={`${
          // dropdown opens in case toggle is truthy
          toggle ? "relative" : "hidden"
        } h-[350px] w-[350px] overflow-scroll rounded-xl bg-white`}
      >
        {data.map((item, id) => (
          <div className="text-black" key={id}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
