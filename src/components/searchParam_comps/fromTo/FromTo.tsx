import "./styles.css";

type InputType = {
  name: string;
  placeholder: string;
  type: string;
  value: number;
  hanldeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

import useStore from "../../../store";

const FromTo = () => {
  const store = useStore();

  const inputData: InputType[] = [
    {
      name: "from",
      placeholder: "from",
      type: "number",
      value: store.searchParams.year.from,
      hanldeChange: (e) => store.addYearFrom(Number(e.target.value)),
    },
    {
      name: "to",
      placeholder: "to",
      type: "number",
      value: store.searchParams.year.to,
      hanldeChange: (e) => store.addYearTo(Number(e.target.value)),
    },
  ];

  console.log(store.searchParams);

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
            value={input.value ? input.value : ""}
          />
        ))}
      </div>
    </div>
  );
};
export default FromTo;
