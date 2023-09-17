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
      {data?.map((val, id) => (
        // we itterate over data and set item based on users selection
        <div onClick={() => itemSetter(val)} className="text-black" key={id}>
          <p>{val}</p>
        </div>
      ))}
    </div>
  );
};

export default Child;
