type DataListProps = {
  items: number[];
  value: number;
  onClickHandler: (val: number) => void;
};

const DataList = ({ items, value, onClickHandler }: DataListProps) => {
  const itemSetter = (item: number) => {
    if (item === value) {
      onClickHandler(0);
    } else {
      onClickHandler(item);
    }
  };

  return (
    <ul className="scrollable flex flex-1 flex-col items-center overflow-y-scroll">
      {items.map((item, index) => (
        <li
          onClick={() => itemSetter(item)}
          // onClick={() => onClickHandler(item)}
          className="cursor-pointer"
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
