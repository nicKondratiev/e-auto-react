type ChildProps = {
  data: string[];
  // setItem: React.Dispatch<React.SetStateAction<string>>
  setItem: (manu: string) => void;
};

// Child.tsx receives data and setter function of different components like (manufacturer, models and etc)
const Child = ({ data, setItem }: ChildProps) => {
  return (
    <div>
      {data?.map((item, id) => (
        // we itterate over data and set item based on users selection
        <div onClick={() => setItem(item)} className="text-black" key={id}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Child;
