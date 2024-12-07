import "./Cell.css";

export type CellProps = {
  state?: string;
  onToggle?: () => void;
  disabled?: boolean
};

export default function Cell({
                               onToggle = () => {
                               },
                               state,
                               disabled
                             }: CellProps) {
  const imgName = state === "X" ? "/assets/cross.png" : "/assets/circle.png";

  const handleToggle = () => {
    onToggle();
  };

  return (
    <button className="cell" onClick={handleToggle} disabled={disabled}>
      {state && (
        <img src={imgName} alt={state ? `Cell has ${state}` : "Empty Cell"}/>
      )}
    </button>
  );
}


Cell.displayName = 'Cell'
