import { MouseEventHandler } from "react";

type FilterProps = {
  header: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
  toggle: boolean;
  Child: React.ReactNode;
};

// filter component renders based on received props
const Filter = ({ header, handleClick, toggle, Child }: FilterProps) => {
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
          toggle ? "absolute" : "hidden"
        }  h-[350px] w-[350px] overflow-scroll rounded-xl bg-white`}
      >
        {Child}
      </div>
    </div>
  );
};

export default Filter;
