import FromTo from "../fromTo/FromTo";
import YearSelection from "./yearSelection/YearSelection";

const YearChild = () => {
  return (
    <div className="flex h-full flex-col">
      <FromTo />
      <YearSelection />
    </div>
  );
};
export default YearChild;
