import "./styles.css";

type ClearneceProps = {
  value: string;
  onClick: () => void;
  selected: boolean;
  side: string;
};

export default function ClearanceButton({
  value,
  onClick,
  selected,
  side,
}: ClearneceProps) {
  return (
    <div
      onClick={onClick}
      className={`clearanceButton z-10 ${side} ${selected ? "selected" : ""}`}
    >
      <p>{value}</p>
    </div>
  );
}
