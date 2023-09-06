type ChildProps = {
  data: string[];
  setItem: React.Dispatch<React.SetStateAction<string>>;
};

const Child = ({ data, setItem }: ChildProps) => {
  return (
    <div>
      {data?.map((item, id) => (
        <div onClick={() => setItem(item)} className="text-black" key={id}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Child;
