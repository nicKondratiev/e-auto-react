import "./styles.css";

type FromToProps = {
  fromVal: number;
  toVal: number;
  addFrom: (input: number) => void;
  addTo: (input: number) => void;
};

type InputType = {
  name: string;
  placeholder: string;
  type: string;
  value: number;
  hanldeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// if we have both from and to value we want to have "XXXX - XXXX" format
export const fromToSetter = (from: number, to: number, itemProp: string) => {
  if (from && to) {
    itemProp += `${from} - ${to}`;
  } else if (from || to) {
    itemProp += from || to;
  }

  return itemProp;
};

const FromTo = ({ fromVal, toVal, addFrom, addTo }: FromToProps) => {
  const inputData: InputType[] = [
    {
      name: "from",
      placeholder: "from",
      type: "number",
      value: fromVal,
      hanldeChange: (e) => addFrom(Number(e.target.value)),
    },
    {
      name: "to",
      placeholder: "to",
      type: "number",
      value: toVal,
      hanldeChange: (e) => addTo(Number(e.target.value)),
    },
  ];

  return (
    <div className="h-20 bg-white text-black">
      <div className="flex h-full items-center justify-center gap-5 px-2">
        {inputData.map((input, index) => (
          <input
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="input h-3/5 w-2/5 appearance-none rounded-lg
             border px-2 text-sm"
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
