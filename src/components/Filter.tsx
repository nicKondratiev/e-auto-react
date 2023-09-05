import { MouseEventHandler } from "react";

type FilterProps = {
  header: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
  toggle: boolean;
  data: string[];
  setItem: React.Dispatch<React.SetStateAction<string>>;
};

// filter component renders based on received props
const Filter = ({
  header,
  handleClick,
  toggle,
  data,
  setItem,
}: FilterProps) => {
  return (
    <div className="text-2xl text-white">
      <div
        onClick={handleClick}
        className="flex w-[160px] cursor-pointer items-center justify-center rounded-xl bg-orange-700 px-3 py-2"
      >
        <h1>{header}</h1>
      </div>

      <div
        className={`${
          // dropdown opens in case toggle is truthy
          toggle ? "relative" : "hidden"
        } h-[350px] w-[350px] overflow-scroll rounded-xl bg-white`}
      >
        {data?.map((item, id) => (
          <div onClick={() => setItem(item)} className="text-black" key={id}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
