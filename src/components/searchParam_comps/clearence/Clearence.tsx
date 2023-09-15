import "./styles.css";

export default function Clearence() {
  return (
    <div className="flex items-center rounded-xl border">
      <div className={`clearenceButton rounded-l-xl`}>
        <p>Customs</p>
      </div>
      <div className="h-8 w-[1px] rounded-full bg-gray-200"></div>
      <div className="clearenceButton rounded-r-xl">
        <p>Duty Free</p>
      </div>
    </div>
  );
}
