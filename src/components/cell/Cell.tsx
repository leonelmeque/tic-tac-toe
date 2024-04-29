import "./Cell.css";

export type CellProps = {
  state?: string;
  onToggle?: () => void;
};

export default function Cell({ onToggle = () => {}, state }: CellProps) {
  const imgName = state === "X" ? "/assets/cross.png" : "/assets/circle.png";

  const handleToggle = () => {
    onToggle();
  };

  return (
    <div className="cell" onClick={handleToggle}>
      {state && (
        <img src={imgName} alt={state ? `Cell has ${state}` : "Empty Cell"} />
      )}
    </div>
  );
}
