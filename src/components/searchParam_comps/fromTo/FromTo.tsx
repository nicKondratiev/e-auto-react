import "./styles.css";

type InputType = {
  name: string;
  placeholder: string;
  type: string;
  hanldeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

import useStore from "../../../store";

const FromTo = () => {
  const store = useStore();

  console.log(store.searchParams);

  const inputData: InputType[] = [
    {
      name: "from",
      placeholder: "from",
      type: "number",
      hanldeChange: (e) => store.addYearFrom(Number(e.target.value)),
    },
    {
      name: "to",
      placeholder: "to",
      type: "number",
      hanldeChange: (e) => store.addYearTo(Number(e.target.value)),
    },
  ];

  return (
    <div className="h-20 bg-gray-200 text-black">
      <div className="flex h-full items-center gap-5 px-2">
        {inputData.map((input, index) => (
          <input
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="input h-3/5 w-1/2 appearance-none
             rounded-lg px-2 text-base"
            onChange={(e) => input.hanldeChange(e)}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default FromTo;
