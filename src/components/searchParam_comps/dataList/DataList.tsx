type DataListProps = {
  items: number[];
  onClickHandler: (val: number) => void;
};

const DataList = ({ items, onClickHandler }: DataListProps) => {
  return (
    <ul className="scrollable flex flex-1 flex-col items-center overflow-y-scroll">
      {items.map((item, index) => (
        <li
          onClick={() => onClickHandler(item)}
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
