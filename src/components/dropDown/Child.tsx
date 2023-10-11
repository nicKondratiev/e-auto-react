import DoneIcon from "@mui/icons-material/Done";

type ChildProps = {
  data: string[];
  setItem: (item: string) => void;
  item: string;
};

// Child.tsx receives data and setter function of different components like (manufacturer, models and etc)
const Child = ({ data, item, setItem }: ChildProps) => {
  const itemSetter = (val: string) => {
    // if current item's value equals to the value of already setted item it will be removed
    if (item === val) {
      setItem("");
    } else {
      setItem(val);
    }
  };

  return (
    <div>
      <div className="relative flex flex-col gap-3 p-2">
        {data?.map((val, id) => (
          // we itterate over data and set item based on users selection
          <div
            onClick={() => itemSetter(val)}
            className="flex cursor-pointer items-center text-black"
            key={id}
          >
            <span
              className={`${
                item === val ? "bg-green-500" : "bg-transparent"
              } relative mr-[16px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] border bg-center bg-no-repeat text-white transition-all`}
            >
              <DoneIcon fontSize="small" />
            </span>
            <p className="text-sm">{val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Child;
