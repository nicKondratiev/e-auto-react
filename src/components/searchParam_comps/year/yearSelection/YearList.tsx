type YearLIstProps = {
  years: number[];
  onClickHandler: (year: number) => void;
};

const YearList = ({ years, onClickHandler }: YearLIstProps) => {
  return (
    <ul className="scrollable flex flex-1 flex-col items-center overflow-y-scroll">
      {years.map((year, index) => (
        <li
          onClick={() => onClickHandler(year)}
          className="cursor-pointer"
          key={index}
        >
          {year}
        </li>
      ))}
    </ul>
  );
};
export default YearList;
